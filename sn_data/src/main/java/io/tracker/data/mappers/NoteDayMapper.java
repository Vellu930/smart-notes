package io.tracker.data.mappers;

import io.tracker.data.model.NoteDay;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface NoteDayMapper {

    List<NoteDay> getNotes();

    List<NoteDay> findByCycleDay(@Param("cycleDay") int cycleDay);

    NoteDay getNoteByDate(@Param("localDate") LocalDate localDate);

    void createNewNote(@Param("date") LocalDate date, @Param("cycleDay") int cycleDay, @Param("moonDay") int moonDay,
                       @Param("mood") String mood, @Param("note") String note);

    void deleteNote(@Param("date") LocalDate date);

}
