package com.charmander.app.models.repository;

import com.charmander.app.models.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
