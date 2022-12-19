package io.tracker.api.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

import io.tracker.data.mappers.NoteDayMapper;
import io.tracker.data.model.NoteDay;

/**
 * Service for insert/update operations on db for NoteDay
 */
@Slf4j
@AllArgsConstructor
public class NoteDayUpdateService {
    private NoteDayMapper noteDayMapper;

    /**
     * @param date must be in ISO format [2022-12-24]
     */
    public void createNewNote(LocalDate date, int cycleDay, int moonDay, String mood, String note) {

        NoteDay noteDate = noteDayMapper.getNoteByDate(date);

        if (noteDate == null) {
            this.noteDayMapper.createNewNote(date, cycleDay, moonDay, mood, note);
            log.info("New note inserted successfully! Date: {}", date.toString());
        } else {
            this.noteDayMapper.updateNote(date, cycleDay, moonDay, mood, note);
            log.info("Updated existing note for date: {}", date.toString());
        }
    }

    public void deleteNoteByDate(LocalDate date) {
        this.noteDayMapper.deleteNote(date);
    }

}
