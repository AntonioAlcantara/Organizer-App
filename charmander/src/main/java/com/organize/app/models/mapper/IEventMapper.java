package com.organize.app.models.mapper;

import com.organize.app.models.dto.EventDto;
import com.organize.app.models.entity.Event;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Collection;
import java.util.List;

@Mapper
(
    componentModel = "spring",
    uses = {IRoomMapper.class, IUserMapper.class}
)
public interface IEventMapper {

    @Mapping(target = "eventType", expression = "java(event.getEventType().getType())")
    EventDto toDto(Event event);
    List<EventDto> toDtos(Collection<Event> events);
}
