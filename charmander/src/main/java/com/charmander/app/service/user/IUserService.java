package com.charmander.app.service.user;

import com.charmander.app.model.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IUserService {

    ResponseEntity<LoginInfoDto> login(String email, String password);
    ResponseEntity<Boolean> createUser(SignUpDto signUpDto);
    ResponseEntity<Boolean> existsUserByEmail(String email);
    ResponseEntity<Boolean> existsUserByNickname(String nickname);
    ResponseEntity<UserDto> getUserInfo(Long userId);
    ResponseEntity<List<FlatDto>> getFlats(Long userId);
    ResponseEntity<List<EventDto>> getEvents(Long userId, boolean completed);
    ResponseEntity<Set<UserLowInfoDto>> searchUsers(String nickname);
}
