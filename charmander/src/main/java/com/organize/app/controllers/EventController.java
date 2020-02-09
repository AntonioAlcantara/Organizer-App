package com.organize.app.controllers;

import com.organize.app.models.dto.EventDto;
import com.organize.app.models.mapper.IEventMapper;
import com.organize.app.models.service.IEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/v1/event")
public class EventController {

    @Autowired private IEventMapper eventMapper;
    @Autowired private IEventService eventService;

    @GetMapping("/find/all")
    public List<EventDto> getAllEvents() {
        return eventMapper.toDtos(eventService.findAll());
    }
}
