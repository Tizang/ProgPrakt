package lernfabrik.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.*;
import java.util.Map;

@RestController
@RequestMapping("/replay")
@CrossOrigin
public class CsvReplayRestController {

    @Autowired
    private CsvReplayService csvReplayService;

    // Default: one level above the backend project directory (lernfabrik/)
    @Value("${replay.csv.basepath:../}")
    private String csvBasePath;

    /**
     * POST /replay/start?file=simple_process&speed=10
     * file: simple_process | islands2_demo (or an absolute path)
     * speed: replay speed multiplier (e.g. 10 = 10x faster than real time)
     */
    @PostMapping("/start")
    public Map<String, Object> start(
        @RequestParam(defaultValue = "simple_process") String file,
        @RequestParam(defaultValue = "1.0") float speed
    ) {
        Path csvPath = resolveCsvPath(file);
        if (!Files.exists(csvPath)) {
            return Map.of("error", "File not found: " + csvPath.toAbsolutePath());
        }
        try {
            csvReplayService.loadAndStart(csvPath.toString(), speed);
            return Map.of("started", true, "file", csvPath.getFileName().toString(), "speed", speed);
        } catch (IOException e) {
            return Map.of("error", e.getMessage());
        }
    }

    @PostMapping("/stop")
    public Map<String, Object> stop() {
        csvReplayService.stop();
        return Map.of("stopped", true);
    }

    @GetMapping("/status")
    public Map<String, Object> status() {
        return csvReplayService.status();
    }

    private Path resolveCsvPath(String file) {
        // Accept absolute paths directly, otherwise resolve relative to basepath
        Path p = Path.of(file);
        if (p.isAbsolute()) return p;
        String fileName = file.endsWith(".csv") ? file : file + ".csv";
        return Path.of(csvBasePath).resolve(fileName).normalize();
    }
}
