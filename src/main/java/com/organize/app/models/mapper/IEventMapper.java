package com.organize.app.models.mapper;

import com.organize.app.models.dto.EventDto;
import com.organize.app.models.entity.Event;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IEventMapper {

    EventDto toDto(Event event);
    List<EventDto> toDtos(Collection<Event> events);
}
