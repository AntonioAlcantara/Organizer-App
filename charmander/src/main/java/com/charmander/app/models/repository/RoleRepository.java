package com.charmander.app.models.repository;

import com.charmander.app.models.entity.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
