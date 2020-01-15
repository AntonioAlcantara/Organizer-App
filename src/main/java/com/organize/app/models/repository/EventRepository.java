package com.organize.app.models.repository;

import com.organize.app.models.entity.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {
}
