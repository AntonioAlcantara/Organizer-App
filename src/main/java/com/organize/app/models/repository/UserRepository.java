package com.organize.app.models.repository;

import com.organize.app.models.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
