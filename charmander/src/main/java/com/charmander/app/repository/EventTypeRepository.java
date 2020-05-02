package com.charmander.app.repository;

import com.charmander.app.model.EventType;
import org.springframework.data.repository.CrudRepository;

public interface EventTypeRepository extends CrudRepository<EventType, String> {
}
