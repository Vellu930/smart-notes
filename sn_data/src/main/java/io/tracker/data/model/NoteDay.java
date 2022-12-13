package io.tracker.data.model;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.ZonedDateTime;

/**
 * Each NoteDay is unique item. For each date and id, there is only one entry - this object.
 * It will contain more items, and other nested objects later.
 */
@Data
public class NoteDay implements Serializable {

    @Serial
    private static final long serialVersionUID = 20221126163125L;

    private Integer id;
//    private ZonedDateTime timestamp;
    /**
     * date should be unique for each note - only one note allowed per day
     */
    private LocalDate date;
    private int cycleDay;
    private int moonDay;
    private String mood;
    private String note;

    public NoteDay() {
    }

    public NoteDay(LocalDate date, int cycleDay, int moonDay, String mood, String note) {
        this.date = date;
        this.cycleDay = cycleDay;
        this.moonDay = moonDay;
        this.mood = mood;
        this.note = note;
    }
}