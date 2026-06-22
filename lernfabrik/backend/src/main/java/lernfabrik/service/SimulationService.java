package lernfabrik.service;

import lernfabrik.*;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
@EnableScheduling
public class SimulationService {

    // Production line order
    public static final List<String> MACHINE_ORDER = List.of(
        "SortingLine", "VacuumGripper1", "ConveyorBelt",
        "VacuumGripper2", "MultiProcessing", "HighBay"
    );

    // Processing times per machine in simulated ms
    private static final Map<String, Long> PROCESSING_TIMES = Map.of(
        "SortingLine",    3000L,
        "VacuumGripper1", 2000L,
        "ConveyorBelt",   3680L,
        "VacuumGripper2", 2000L,
        "MultiProcessing",5000L,
        "HighBay",        4000L
    );

    private static final int   HEAT_THRESHOLD       = 20;
    private static final long  OVERHEAT_TIMEOUT_MS  = 30_000L;
    private static final long  COOLDOWN_INTERVAL_MS = 180_000L;
    // Active-mode power in watts; idle = 24W
    private static final float ACTIVE_WATTS         = 120f;

    private final AtomicBoolean running = new AtomicBoolean(false);
    private float speedMultiplier       = 1.0f;
    private long  packageIntervalMs     = 30_000L;

    // In-memory simulation state
    private long simulatedTimeMs       = 0;
    private long lastPacketGenMs       = 0;
    private long lastCooldownMs        = 0;

    private final Map<String, Long>   processingStartMs   = new HashMap<>();
    private final Map<String, Long>   overheatStartMs     = new HashMap<>();
    private final Map<String, Long>   machineGemIds       = new HashMap<>();
    private final Queue<Long>         pendingPacketIds     = new LinkedList<>();

    // === Public API ===

    public void start(float speed, float packageIntervalMinutes) {
        this.speedMultiplier   = speed;
        this.packageIntervalMs = (long) (packageIntervalMinutes * 60_000);
        simulatedTimeMs = 0;
        lastPacketGenMs = 0;
        lastCooldownMs  = 0;
        processingStartMs.clear();
        overheatStartMs.clear();
        pendingPacketIds.clear();
        cacheMachineIds();
        running.set(true);
    }

    public void stop() {
        running.set(false);
        resetMachines();
    }

    public boolean isRunning()          { return running.get(); }
    public float   getSpeedMultiplier() { return speedMultiplier; }

    // === Tick ===

    @Scheduled(fixedRate = 5)
    public void tick() {
        if (!running.get()) return;

        long simDelta = (long) (5 * speedMultiplier);
        simulatedTimeMs += simDelta;

        generatePackets();
        processLine();
        cooldown();
    }

    // === Initialisation helpers ===

    private void cacheMachineIds() {
        machineGemIds.clear();
        for (Machine m : LernfabrikManager.getMachineList()) {
            machineGemIds.put(m.getMachineName(), m.getGemId());
        }
    }

    private void resetMachines() {
        for (Machine m : LernfabrikManager.getMachineList()) {
            m.setState(MachineState.IDLE);
            m.setHeatLevel(0f);
        }
    }

    // === Simulation steps ===

    private void generatePackets() {
        if (simulatedTimeMs - lastPacketGenMs < packageIntervalMs) return;
        lastPacketGenMs = simulatedTimeMs;

        PacketColor[] colors = PacketColor.values();
        PacketColor color = colors[(int) (Math.random() * colors.length)];

        LernfabrikManager.packetBuilder()
            .color(color)
            .createdAt(LocalDateTime.now())
            .deliveredAt(LocalDateTime.now())   // placeholder; overwritten on delivery
            .delivered(false)
            .currentMachineName("pending")
            .build()
            .ifPresent(p -> pendingPacketIds.offer(p.getGemId()));
    }

    private void processLine() {
        // Walk through the line; each machine checks its own state
        for (int i = 0; i < MACHINE_ORDER.size(); i++) {
            String name = MACHINE_ORDER.get(i);
            Long gemId  = machineGemIds.get(name);
            if (gemId == null) continue;
            Machine machine = LernfabrikManager.getMachineSure(gemId);

            // --- overheated ---
            if (machine.getState() == MachineState.OVERHEATED) {
                Long start = overheatStartMs.get(name);
                if (start != null && simulatedTimeMs - start >= OVERHEAT_TIMEOUT_MS) {
                    machine.setState(MachineState.IDLE);
                    machine.setHeatLevel(0f);
                    overheatStartMs.remove(name);
                }
                continue;
            }

            Long procStart = processingStartMs.get(name);

            // --- idle: try to accept a packet ---
            if (procStart == null) {
                if (i == 0 && !pendingPacketIds.isEmpty()) {
                    Long pid = pendingPacketIds.poll();
                    processingStartMs.put(name, simulatedTimeMs);
                    processingStartMs.put(name + "_packet", pid);
                    machine.setState(MachineState.RUNNING);
                    updatePacketLocation(pid, name);
                } else if (i > 0) {
                    // packet gets passed from previous machine on its finish step
                    machine.setState(MachineState.IDLE);
                }
                continue;
            }

            // --- running: check if done ---
            long processingTime = (long) (PROCESSING_TIMES.get(name));
            if (simulatedTimeMs - procStart < processingTime) {
                machine.setState(MachineState.RUNNING);
                continue;
            }

            // --- done ---
            Long packetId = processingStartMs.remove(name + "_packet");
            processingStartMs.remove(name);
            machine.setProcessedPackets(machine.getProcessedPackets() + 1);
            addEnergy(machine, processingTime);

            float newHeat = machine.getHeatLevel() + 1f;
            machine.setHeatLevel(newHeat);

            if (newHeat >= HEAT_THRESHOLD) {
                machine.setState(MachineState.OVERHEATED);
                machine.setOverheatingCount(machine.getOverheatingCount() + 1);
                overheatStartMs.put(name, simulatedTimeMs);
                continue;
            }

            // pass packet forward
            if (i < MACHINE_ORDER.size() - 1) {
                String nextName = MACHINE_ORDER.get(i + 1);
                if (!processingStartMs.containsKey(nextName)) {
                    processingStartMs.put(nextName, simulatedTimeMs);
                    processingStartMs.put(nextName + "_packet", packetId);
                    Long nextId = machineGemIds.get(nextName);
                    if (nextId != null) {
                        Machine next = LernfabrikManager.getMachineSure(nextId);
                        next.setState(MachineState.RUNNING);
                    }
                    if (packetId != null) updatePacketLocation(packetId, nextName);
                } else {
                    // next busy – requeue packet and wait
                    processingStartMs.put(name, procStart);
                    processingStartMs.put(name + "_packet", packetId);
                    machine.setState(MachineState.RUNNING);
                }
            } else {
                // delivered
                if (packetId != null) deliverPacket(packetId);
                machine.setState(MachineState.IDLE);
            }
        }
    }

    private void cooldown() {
        if (simulatedTimeMs - lastCooldownMs < COOLDOWN_INTERVAL_MS) return;
        lastCooldownMs = simulatedTimeMs;
        for (Machine m : LernfabrikManager.getMachineList()) {
            if (m.getState() != MachineState.OVERHEATED) {
                m.setHeatLevel(Math.max(0f, m.getHeatLevel() - 1f));
            }
        }
    }

    private void addEnergy(Machine machine, long processingTimeMs) {
        float kwh = ACTIVE_WATTS * processingTimeMs / 1000f / 3600f / 1000f;
        machine.setEnergyConsumedKwh(machine.getEnergyConsumedKwh() + kwh);
    }

    private void updatePacketLocation(Long packetId, String machineName) {
        if (packetId == null) return;
        Packet p = LernfabrikManager.getPacketSure(packetId);
        p.setCurrentMachineName(machineName);
    }

    private void deliverPacket(Long packetId) {
        if (packetId == null) return;
        Packet p = LernfabrikManager.getPacketSure(packetId);
        p.setDelivered(true);
        p.setDeliveredAt(LocalDateTime.now());
    }
}
