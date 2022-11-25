package io.tracker.smartnotes;

import io.tracker.data.mappers.NoteDayMapper;
import io.tracker.data.model.NoteDay;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MappedTypes(NoteDay.class)
@MapperScan("io.tracker.data.mappers")
@SpringBootApplication
public class SmartNotesApplication implements CommandLineRunner {

	private NoteDayMapper mapper;

	public SmartNotesApplication(NoteDayMapper mapper) {
		this.mapper = mapper;
	}

	public static void main(String[] args) {
		SpringApplication.run(SmartNotesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(" ::::::::: Smart notes 2022 ::::::::: ");
		System.out.println(this.mapper.getNotes().toString());
		System.out.println(this.mapper.findByDay(3).toString());
	}

}
