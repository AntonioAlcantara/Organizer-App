package com.charmander.app.repository;

import com.charmander.app.entity.Room;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Locale;

public interface RoomRepository extends CrudRepository<Room, Long> {

    List<Room> findAllByLocale(String locale);
}
