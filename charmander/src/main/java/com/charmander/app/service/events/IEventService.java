package com.charmander.app.service.events;

import com.charmander.app.model.CreateEventDto;
import org.springframework.http.ResponseEntity;

public interface IEventService {

    ResponseEntity<Void> createEvent(CreateEventDto createEventDto, long userId);
    ResponseEntity<Void> deleteEvent(long eventId);
    ResponseEntity<Void> completeEvent(long eventId);
}
