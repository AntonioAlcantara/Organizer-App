package com.charmander.app.repository;

import com.charmander.app.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email, String password);
//    @Query("SELECT User FROM User WHERE nickname LIKE :nickname")
//    List<User> findAllLikeNickname(@Param("nickname") String nickname);
}
