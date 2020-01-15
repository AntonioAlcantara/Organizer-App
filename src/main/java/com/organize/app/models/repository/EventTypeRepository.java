package com.organize.app.models.repository;

import com.organize.app.models.entity.EventType;
import org.springframework.data.repository.CrudRepository;

public interface EventTypeRepository extends CrudRepository<EventType, String> {
}
