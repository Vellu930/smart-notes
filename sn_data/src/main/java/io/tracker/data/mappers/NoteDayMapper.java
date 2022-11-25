package io.tracker.data.mappers;

import io.tracker.data.model.NoteDay;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface NoteDayMapper {

    List<NoteDay> getNotes();

    //    @Select("SELECT * FROM noteday WHERE cycle_day = #{cycleDay}")
    NoteDay findByDay(@Param("cycleDay") int cycleDay);
}
