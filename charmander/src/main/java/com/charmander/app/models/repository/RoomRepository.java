package com.charmander.app.models.repository;

import com.charmander.app.models.entity.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Long> {
}