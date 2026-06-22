package lernfabrik.service;

import lernfabrik.LernfabrikManager;
import lernfabrik.Machine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/simulation")
@CrossOrigin
public class SimulationRestController {

    @Autowired
    private SimulationService simulationService;

    @PostMapping("/start")
    public Map<String, Object> start(
        @RequestParam(defaultValue = "1.0") float speed,
        @RequestParam(defaultValue = "0.5") float packageIntervalMinutes
    ) {
        simulationService.start(speed, packageIntervalMinutes);
        return Map.of("running", true, "speed", speed);
    }

    @PostMapping("/stop")
    public Map<String, Object> stop() {
        simulationService.stop();
        return Map.of("running", false);
    }

    @GetMapping("/status")
    public Map<String, Object> status() {
        return Map.of(
            "running", simulationService.isRunning(),
            "speed",   simulationService.getSpeedMultiplier()
        );
    }

    @GetMapping("/machines")
    public List<Map<String, Object>> machines() {
        return LernfabrikManager.getMachineList().stream()
            .map(m -> Map.<String, Object>of(
                "name",       m.getMachineName(),
                "state",      m.getState().toString(),
                "energy",     m.getEnergyConsumedKwh(),
                "packets",    m.getProcessedPackets(),
                "heatLevel",  m.getHeatLevel()
            ))
            .collect(Collectors.toList());
    }
}
