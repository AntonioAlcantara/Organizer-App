package com.organize.app.models.repository;

import com.organize.app.models.entity.Room;
import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Long> {
}
