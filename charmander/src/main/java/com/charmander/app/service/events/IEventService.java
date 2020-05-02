package com.charmander.app.service.events;

import com.charmander.app.model.Event;

import java.util.List;

public interface IEventService {

    List<Event> findAll();
    Event findById(Long id);
}
