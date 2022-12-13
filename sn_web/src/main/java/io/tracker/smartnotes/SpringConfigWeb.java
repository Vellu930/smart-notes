package io.tracker.smartnotes;

import io.tracker.api.service.NoteDayQueryService;
import io.tracker.api.service.NoteDayUpdateService;
import io.tracker.data.mappers.NoteDayMapper;
import io.tracker.data.model.NoteDay;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@MappedTypes(NoteDay.class)
@MapperScan("io.tracker.data.mappers")
@Import({io.tracker.api.service.NoteDayQueryService.class,
        io.tracker.api.service.NoteDayUpdateService.class})
@ComponentScan(basePackageClasses = {io.tracker.controller.NoteDayController.class})
@Configuration
public class SpringConfigWeb {

    public NoteDayUpdateService noteDayUpdateService(NoteDayMapper mapper) {
        return new NoteDayUpdateService(mapper);
    }

    public NoteDayQueryService noteDayQueryService(NoteDayMapper mapper) {
        return new NoteDayQueryService(mapper);
    }

}
