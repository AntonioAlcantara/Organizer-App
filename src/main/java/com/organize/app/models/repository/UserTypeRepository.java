package com.organize.app.models.repository;

import com.organize.app.models.entity.UserType;
import org.springframework.data.repository.CrudRepository;

public interface UserTypeRepository extends CrudRepository<UserType, String> {
}
