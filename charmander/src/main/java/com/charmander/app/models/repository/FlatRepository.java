package com.charmander.app.models.repository;

import com.charmander.app.models.entity.Flat;
import org.springframework.data.repository.CrudRepository;

public interface FlatRepository extends CrudRepository<Flat, Long> {
}
