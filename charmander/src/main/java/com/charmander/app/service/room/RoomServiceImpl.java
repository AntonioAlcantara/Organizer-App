package com.charmander.app.service.room;

import com.charmander.app.entity.Room;
import com.charmander.app.mapper.IRoomMapper;
import com.charmander.app.model.RoomDto;
import com.charmander.app.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

@Service
public class RoomServiceImpl implements IRoomService {

    @Autowired private RoomRepository roomRepo;
    @Autowired private IRoomMapper iRoomMapper;

    @Override
    public ResponseEntity<Void> createRoom(String name, Locale locale) {
        Room room = new Room();
        room.setName(name);
        room.setLocale(locale.toLanguageTag());
        roomRepo.save(room);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Set<RoomDto>> findAllByLocale(Locale locale) {
        var rooms = roomRepo.findAllByLocale(locale.toLanguageTag());
        return (rooms.isEmpty()) ? new ResponseEntity<>(HttpStatus.NO_CONTENT) :
                                   new ResponseEntity<>(new HashSet<>(iRoomMapper.toDtos(rooms)), HttpStatus.OK);
    }
}
