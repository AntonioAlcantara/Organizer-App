package com.organize.app.models.repository;

import com.organize.app.models.entity.Flat;
import org.springframework.data.repository.CrudRepository;

public interface FlatRepository extends CrudRepository<Flat, Long> {
}
