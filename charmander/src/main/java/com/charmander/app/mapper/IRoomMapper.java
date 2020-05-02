package com.charmander.app.mapper;

import com.charmander.app.dto.RoomDto;
import com.charmander.app.model.Room;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IRoomMapper {

    RoomDto toDto (Room room);
    List<RoomDto> toDtos (Collection<Room> rooms);
}
