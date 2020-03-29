package com.charmander.app.models.mapper;

import com.charmander.app.models.dto.RoomDto;
import com.charmander.app.models.entity.Room;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IRoomMapper {

    RoomDto toDto (Room room);
    List<RoomDto> toDtos (Collection<Room> rooms);
}
