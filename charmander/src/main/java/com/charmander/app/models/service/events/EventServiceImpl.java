package com.charmander.app.models.service.events;

import com.charmander.app.models.entity.Event;
import com.charmander.app.models.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements IEventService {

    @Autowired
    private EventRepository eventRepo;

    @Override
    @Transactional(readOnly = true)
    public List<Event> findAll() {
        List<Event> list = new ArrayList<>();
        eventRepo.findAll().forEach(list::add);
        return list;
    }

    @Override
    @Transactional(readOnly = true)
    public Event findById(Long id) {
        return eventRepo.findById(id).orElse(null);
    }
}
