package lernfabrik;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

import java.io.IOException;

@SpringBootApplication(
    exclude = {DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class},
    scanBasePackages = {"umlp.backendrte.service.websocket", "umlp.backendrte.service.rest", "lernfabrik.service"}
)
public class LernfabrikServerApplication extends LernfabrikServerApplicationTOP {

  public static void main(String[] args) {
    SpringApplication.run(LernfabrikServerApplication.class, args);
  }

  @PostConstruct
  @Override
  public void init() throws IOException {
    super.init();
    initMachines();
  }

  private void initMachines() {
    createMachine("SortingLine");
    createMachine("VacuumGripper1");
    createMachine("ConveyorBelt");
    createMachine("VacuumGripper2");
    createMachine("MultiProcessing");
    createMachine("HighBay");
  }

  private void createMachine(String name) {
    LernfabrikManager.machineBuilder()
        .machineName(name)
        .state(MachineState.IDLE)
        .heatLevel(0.0f)
        .overheatingCount(0)
        .energyConsumedKwh(0.0f)
        .processedPackets(0)
        .build()
        .ifPresent(m -> {});
  }
}
