package com.charmander.app.mapper;

import com.charmander.app.entity.*;
import com.charmander.app.model.CreateEventDto;
import com.charmander.app.model.EventDto;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
(
    componentModel = "spring",
    uses = {IRoomMapper.class, IUserMapper.class, IFlatMapper.class}
)
public interface IEventMapper {

    @Mapping(target = "eventType", expression = "java(event.getEventType().getType())")
    @Mapping(target = "creator", ignore = true)
    EventDto toDto(Event event);
    List<EventDto> toDtos(List<Event> events);

    @Mapping(target = "eventType", expression = "java(eventType)")
    @Mapping(target = "creator", expression = "java(userId)")
    @Mapping(target = "users", expression = "java(users)")
    @Mapping(target = "flat", expression = "java(flat)")
    @Mapping(target = "rooms", expression = "java(rooms)")
    Event toEntity(
            CreateEventDto createEventDto,
            @Context long userId,
            @Context EventType eventType,
            @Context List<User> users,
            @Context List<Room> rooms,
            @Context Flat flat
    );
}
