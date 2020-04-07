package com.charmander.app.models.service.events;

import com.charmander.app.models.entity.Event;

import java.util.List;

public interface IEventService {

    List<Event> findAll();
    Event findById(Long id);
}
