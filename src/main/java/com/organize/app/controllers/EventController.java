package com.organize.app.controllers;

import com.organize.app.models.entity.Event;
import com.organize.app.models.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/v1/event")
public class EventController {

    @Autowired
    private IEventService eventService;

    @GetMapping("/find/all")
    public List<Event> getAllEvents() {
        return eventService.findAll();
    }
}
