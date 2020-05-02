package com.charmander.app.service.user;

import com.charmander.app.model.LoginInfoDto;
import com.charmander.app.model.SignUpDto;
import com.charmander.app.model.UserDto;
import org.springframework.http.ResponseEntity;

public interface IUserService {

    ResponseEntity<LoginInfoDto> login(String email, String password);
    ResponseEntity<Boolean> createUser(SignUpDto signUpDto);
    boolean existsUser(String email);
    ResponseEntity<UserDto> getUserInfo(Long id);
}
