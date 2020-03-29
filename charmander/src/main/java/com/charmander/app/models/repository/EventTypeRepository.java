package com.charmander.app.models.repository;

import com.charmander.app.models.entity.EventType;
import org.springframework.data.repository.CrudRepository;

public interface EventTypeRepository extends CrudRepository<EventType, String> {
}
