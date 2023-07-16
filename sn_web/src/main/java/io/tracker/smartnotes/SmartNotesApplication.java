package io.tracker.smartnotes;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import io.tracker.api.service.NoteDayQueryService;
import io.tracker.api.service.NoteDayUpdateService;

@Slf4j
@RestController
@SpringBootApplication
public class SmartNotesApplication implements CommandLineRunner {

	private NoteDayQueryService noteDayQueryService;
	private NoteDayUpdateService updateService;

	public SmartNotesApplication(NoteDayQueryService queryService, NoteDayUpdateService updateService) {
		this.noteDayQueryService = queryService;
		this.updateService = updateService;
	}

	public static void main(String[] args) {
		SpringApplication.run(SmartNotesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(" ::::::::: Smart notes 2023 ::::::::: ");
		List<LocalDate> dates = new ArrayList<>();
		dates.add(LocalDate.of(2022, 10, 15));
		noteDayQueryService.getNoteByDate(dates.get(0));
		updateService.createNewNote(LocalDate.of(2022, 11,26), 12, 3, "Productive mood!", "Wrote some november Notes! Yey.");
		noteDayQueryService.getAllNoteDays();

	}

}
