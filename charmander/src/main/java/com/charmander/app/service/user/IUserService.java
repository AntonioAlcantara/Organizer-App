package com.charmander.app.service.user;

import com.charmander.app.model.*;
import org.springframework.http.ResponseEntity;

import java.util.HashSet;
import java.util.Set;

public interface IUserService {

    ResponseEntity<LoginInfoDto> login(String email, String password);
    ResponseEntity<Boolean> createUser(SignUpDto signUpDto);
    ResponseEntity<Boolean> existsUser(String email);
    ResponseEntity<UserDto> getUserInfo(Long userId);
    ResponseEntity<HashSet<FlatDto>> getFlats(Long userId);
    ResponseEntity<HashSet<EventDto>> getEvents(Long userId);
    ResponseEntity<Set<UserDto>> searchUsers(String nickname);
}
