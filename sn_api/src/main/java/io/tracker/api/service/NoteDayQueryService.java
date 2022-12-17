package io.tracker.api.service;

import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import io.tracker.data.mappers.NoteDayMapper;
import io.tracker.data.model.NoteDay;

/**
 * Service for SELECTing from db, only queries of NoteDay
 */
@AllArgsConstructor
public class NoteDayQueryService {
    private NoteDayMapper noteDayMapper;

    public List<NoteDay> getNotesByCycleDay(int cycleDay) {
        return this.noteDayMapper.findByCycleDay(cycleDay);
    }

    /**
     * @return all NoteDay objects in DB for further detailed manipulation
     */
    public List<NoteDay> getAllNoteDays() {
        return noteDayMapper.getNotes();
    }

    /**
     * One date can have only one note - date serves as human-readable identifier of notes
     * @param localDate date
     * @return noteDay for that date
     */
    public NoteDay getNoteByDate(LocalDate localDate) {
        return this.noteDayMapper.getNoteByDate(localDate);
    }

}
