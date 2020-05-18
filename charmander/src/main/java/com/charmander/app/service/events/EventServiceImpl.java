package com.charmander.app.service.events;

import com.charmander.app.entity.Event;
import com.charmander.app.entity.Room;
import com.charmander.app.entity.User;
import com.charmander.app.mapper.IEventMapper;
import com.charmander.app.model.CreateEventDto;
import com.charmander.app.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements IEventService {

    @Autowired private EventRepository eventRepo;
    @Autowired private IEventMapper iEventMapper;
    @Autowired private RoomRepository roomRepo;
    @Autowired private FlatRepository flatRepo;
    @Autowired private UserRepository userRepo;
    @Autowired private EventTypeRepository eventTypeRepo;

    @Override
    @Transactional
    public ResponseEntity<Void> createEvent(CreateEventDto createEventDto, long userId) {
        List<User> userList = new ArrayList<>();
        userRepo.findAllById(createEventDto.getUserIds()).forEach(userList::add);
        var flat = flatRepo.findById(createEventDto.getFlatId()).orElseThrow();
        List<Room> roomList = new ArrayList<>();
        roomRepo.findAllById(createEventDto.getRoomIds()).forEach(roomList::add);
        var eventType = eventTypeRepo.findById(createEventDto.getEventType()).orElseThrow();
        if (userList.isEmpty() || roomList.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Event event = iEventMapper.toEntity(createEventDto, userId, eventType, userList, roomList, flat);
        event.setActive(true);
        eventRepo.save(event);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Void> deleteEvent(long eventId) {
        eventRepo.deleteById(eventId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> completeEvent(long eventId) {
        var event = eventRepo.findById(eventId).orElseThrow();
        event.setCompleted(true);
        eventRepo.save(event);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
