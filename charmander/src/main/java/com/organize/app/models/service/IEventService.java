package com.organize.app.models.service;

import com.organize.app.models.entity.Event;

import java.util.List;

public interface IEventService {

    List<Event> findAll();
    Event findById(Long id);
}
