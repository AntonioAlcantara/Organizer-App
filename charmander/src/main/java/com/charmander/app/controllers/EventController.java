package com.charmander.app.controllers;

import com.charmander.app.mapper.IEventMapper;
import com.charmander.app.model.CreateEventDto;
import com.charmander.app.service.events.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;

@RestController
@RequestMapping("/v1/event")
public class EventController {

    @Autowired private IEventMapper eventMapper;
    @Autowired private IEventService eventService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/create")
    public ResponseEntity<Void> createEvent(
            @Valid @RequestBody CreateEventDto createEventDto, @RequestHeader("USER") Long userId
    ) {
        if (createEventDto.getStartDate() == null) {
            createEventDto.setStartDate(LocalDate.now());
        }
        return eventService.createEvent(createEventDto, userId);
    }
}
