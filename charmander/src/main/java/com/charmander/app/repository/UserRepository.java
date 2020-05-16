package com.charmander.app.repository;

import com.charmander.app.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByNickname(String nickname);
    Optional<User> findByEmailAndPassword(String email, String password);
    @Query(value = "SELECT * FROM organizer.user WHERE nickname LIKE :nickname", nativeQuery = true)
    List<User> findAllByNickname(@Param("nickname") String nickname);
}
