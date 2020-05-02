package com.charmander.app.mapper;

import com.charmander.app.entity.Room;
import com.charmander.app.model.RoomDto;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IRoomMapper {

    RoomDto toDto (Room room);
    List<RoomDto> toDtos (Collection<Room> rooms);
}
