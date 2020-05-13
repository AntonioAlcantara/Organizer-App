package com.charmander.app.service.events;

import com.charmander.app.entity.Event;

import java.util.List;

public interface IEventService {

    List<Event> findAll();
    Event findById(Long id);
}
