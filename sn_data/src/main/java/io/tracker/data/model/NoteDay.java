package io.tracker.data.model;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
public class NoteDay implements Serializable {

    private Integer id;
    private LocalDate date;
    private int cycleDay;
    private int moonDay;
    private String mood;
    private String note;

}