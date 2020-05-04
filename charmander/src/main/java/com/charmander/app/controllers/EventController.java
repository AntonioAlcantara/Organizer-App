package com.charmander.app.controllers;

import com.charmander.app.model.EventDto;
import com.charmander.app.mapper.IEventMapper;
import com.charmander.app.service.events.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/event")
public class EventController {

    @Autowired private IEventMapper eventMapper;
    @Autowired private IEventService eventService;

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/all")
    public List<EventDto> getAllEvents() {
        return eventMapper.toDtos(eventService.findAll());
    }
}
