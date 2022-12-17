package io.tracker.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

import io.tracker.api.service.NoteDayQueryService;
import io.tracker.api.service.NoteDayUpdateService;
import io.tracker.data.model.NoteDay;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@AllArgsConstructor
public class NoteDayController {

    private final NoteDayQueryService queryService;

    private final NoteDayUpdateService updateService;

    @GetMapping("/notes")
    public List<NoteDay> getNoteDays() {
        return this.queryService.getAllNoteDays();
    }

    @GetMapping("/note")
    public NoteDay getNoteByDate(@RequestParam("date") String localDate) {
        return this.queryService.getNoteByDate(LocalDate.parse(localDate));
    }

    @GetMapping("/notes-cycle")
    public List<NoteDay> getNotesByCycleDay(@RequestParam("cycle_day") int cycleDay) {
        return this.queryService.getNotesByCycleDay(cycleDay);
    }

    @PostMapping("/new-note")
    public void addNewNoteDay(
            @RequestParam("date") String localDate,
            @RequestParam("cycle_day") int cycleDay,
            @RequestParam("moon_day") int moonDay,
            @RequestParam("mood") String mood,
            @RequestParam("note") String note) {
        this.updateService.createNewNote(LocalDate.parse(localDate), cycleDay, moonDay, mood, note);
    }

    @DeleteMapping("/note/remove")
    public void deleteNoteDay(@RequestParam("date") String localDate) {
        this.updateService.deleteNoteByDate(LocalDate.parse(localDate));
    }


}
