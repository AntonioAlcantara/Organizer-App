package com.charmander.app.models.repository;

import com.charmander.app.models.entity.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {
}
