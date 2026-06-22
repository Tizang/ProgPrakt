package lernfabrik.service;

import lernfabrik.*;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.*;

@Service
@EnableScheduling
public class CsvReplayService {

    // Maps CSV machine-name fragments to our model names
    private static final Map<String, String> NAME_MAP = new LinkedHashMap<>();
    static {
        // simple_process.csv naming
        NAME_MAP.put("VacuumGripper01",     "VacuumGripper1");
        NAME_MAP.put("VacuumGripper02",     "VacuumGripper2");
        NAME_MAP.put("ConveyorBelt01",      "ConveyorBelt");
        NAME_MAP.put("MultiProcessing01",   "MultiProcessing");
        NAME_MAP.put("SortingLine01",       "SortingLine");
        NAME_MAP.put("HighBay01",           "HighBay");
        NAME_MAP.put("PunchingMachine01",   "PunchingMachine");
        // islands2_demo.csv naming (Island 1)
        NAME_MAP.put("I1VacuumGripper01",   "I1-VacuumGripper1");
        NAME_MAP.put("I1VacuumGripper02",   "I1-VacuumGripper2");
        NAME_MAP.put("I1ConveyorBelt01",    "I1-ConveyorBelt");
        NAME_MAP.put("I1MultiProcessing01", "I1-MultiProcessing");
        NAME_MAP.put("I1SortingLine01",     "I1-SortingLine");
        NAME_MAP.put("I1HighBay01",         "I1-HighBay");
        // islands2_demo.csv naming (Island 2)
        NAME_MAP.put("I2SortingLine02",      "I2-SortingLine");
        NAME_MAP.put("I2VacuumGripper03",    "I2-VacuumGripper1");
        NAME_MAP.put("I2VacuumGripper04",    "I2-VacuumGripper2");
        NAME_MAP.put("I2VacuumGripper05",    "I2-VacuumGripper3");
        NAME_MAP.put("I2ConveyorBelt02",     "I2-ConveyorBelt1");
        NAME_MAP.put("I2ConveyorBelt03",     "I2-ConveyorBelt2");
        NAME_MAP.put("I2ConveyorBelt04",     "I2-ConveyorBelt3");
        NAME_MAP.put("I2HighBay02",          "I2-HighBay");
        NAME_MAP.put("I2IndexedLine01",      "I2-IndexedLine");
        NAME_MAP.put("I2PunchingMachine01",  "I2-PunchingMachine1");
        NAME_MAP.put("I2PunchingMachine02",  "I2-PunchingMachine2");
    }

    private static final float ACTIVE_WATTS = 120f;
    private static final float IDLE_WATTS   = 24f;
    // Pattern: topic,"{json}",0,True/False,unixts,delta
    private static final Pattern LINE_PATTERN = Pattern.compile(
        "^([^,]+),\"(.*?)\"(?:,.*?){2},([0-9.E+]+),");

    private record CsvEvent(double ts, String csvMachine, boolean isRunning) {}

    private final AtomicBoolean running      = new AtomicBoolean(false);
    private float   speedMultiplier          = 1.0f;
    private List<CsvEvent> events            = Collections.emptyList();
    private int     idx                      = 0;
    private double  startTs                  = 0;
    private long    wallStartMs              = 0;
    private final Map<String, Long> gemIds   = new HashMap<>();
    private final Map<String, Double> activeStartTs = new HashMap<>();

    // Progress info
    private int    totalEvents   = 0;
    private String loadedFile    = "";

    // === Public API ===

    public void loadAndStart(String csvFilePath, float speed) throws IOException {
        this.speedMultiplier = speed;
        this.events = parseCsv(csvFilePath);
        this.totalEvents = events.size();
        this.loadedFile  = Path.of(csvFilePath).getFileName().toString();

        if (events.isEmpty()) throw new IllegalArgumentException("No isExecuting events found in CSV");

        resetMachines();
        initMachinesFromCsv();

        this.idx        = 0;
        this.startTs    = events.get(0).ts();
        this.wallStartMs = System.currentTimeMillis();
        activeStartTs.clear();
        running.set(true);
    }

    public void stop() {
        running.set(false);
        for (Machine m : LernfabrikManager.getMachineList())
            m.setState(MachineState.IDLE);
    }

    public Map<String, Object> status() {
        double progress = totalEvents > 0 ? (double) idx / totalEvents * 100 : 0;
        return Map.of(
            "running",    running.get(),
            "file",       loadedFile,
            "progress",   Math.round(progress * 10) / 10.0,
            "eventsDone", idx,
            "eventsTotal",totalEvents,
            "speed",      speedMultiplier
        );
    }

    // === Tick ===

    @Scheduled(fixedRate = 50)
    public void tick() {
        if (!running.get() || events.isEmpty()) return;

        long wallElapsed   = System.currentTimeMillis() - wallStartMs;
        double simElapsed  = (wallElapsed / 1000.0) * speedMultiplier;
        double currentTs   = startTs + simElapsed;

        while (idx < events.size() && events.get(idx).ts() <= currentTs) {
            applyEvent(events.get(idx));
            idx++;
        }

        if (idx >= events.size()) {
            running.set(false);
        }
    }

    // === Parsing ===

    private List<CsvEvent> parseCsv(String path) throws IOException {
        List<CsvEvent> result = new ArrayList<>();
        try (BufferedReader br = Files.newBufferedReader(Path.of(path))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (!line.contains("isExecuting")) continue;
                Matcher m = LINE_PATTERN.matcher(line);
                if (!m.find()) continue;

                String topic     = m.group(1);
                String json      = m.group(2).replace("\"\"", "\"");
                double unixTs    = Double.parseDouble(m.group(3));

                String csvMachine = extractMachineName(topic);
                if (csvMachine == null) continue;

                boolean isRunning = json.contains("\"value\": true") || json.contains("\"value\":true");
                result.add(new CsvEvent(unixTs, csvMachine, isRunning));
            }
        }
        result.sort(Comparator.comparingDouble(CsvEvent::ts));
        return result;
    }

    private String extractMachineName(String topic) {
        // topic: PLC/Island X/Category/MachineName/...
        String[] parts = topic.split("/");
        if (parts.length < 4) return null;
        return parts[3]; // e.g. "VacuumGripper01" or "I1VacuumGripper01"
    }

    // === Machine management ===

    private void resetMachines() {
        new ArrayList<>(LernfabrikManager.getMachineList())
            .forEach(m -> LernfabrikManager.deleteMachine(m.getGemId()));
        gemIds.clear();
    }

    private void initMachinesFromCsv() {
        Set<String> csvMachines = new LinkedHashSet<>();
        for (CsvEvent e : events) csvMachines.add(e.csvMachine());

        for (String csvName : csvMachines) {
            String displayName = NAME_MAP.getOrDefault(csvName, csvName);
            LernfabrikManager.machineBuilder()
                .machineName(displayName)
                .state(MachineState.IDLE)
                .heatLevel(0f)
                .overheatingCount(0)
                .energyConsumedKwh(0f)
                .processedPackets(0)
                .build()
                .ifPresent(m -> gemIds.put(csvName, m.getGemId()));
        }
    }

    // === Event application ===

    private void applyEvent(CsvEvent event) {
        Long gemId = gemIds.get(event.csvMachine());
        if (gemId == null) return;
        Machine machine = LernfabrikManager.getMachineSure(gemId);

        if (event.isRunning()) {
            machine.setState(MachineState.RUNNING);
            activeStartTs.put(event.csvMachine(), event.ts());
        } else {
            machine.setState(MachineState.IDLE);
            Double start = activeStartTs.remove(event.csvMachine());
            if (start != null) {
                double durationSec = event.ts() - start;
                float kwh = (float)(ACTIVE_WATTS * durationSec / 3600.0 / 1000.0);
                machine.setEnergyConsumedKwh(machine.getEnergyConsumedKwh() + kwh);
                machine.setProcessedPackets(machine.getProcessedPackets() + 1);
            }
        }
    }
}
