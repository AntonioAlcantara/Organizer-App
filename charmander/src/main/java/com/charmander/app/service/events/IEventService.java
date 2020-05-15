package com.charmander.app.service.events;

import com.charmander.app.entity.Event;
import com.charmander.app.model.CreateEventDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IEventService {

    List<Event> findAll();
    Event findById(Long id);
    ResponseEntity<Void> createEvent(CreateEventDto createEventDto, long userId);
}
