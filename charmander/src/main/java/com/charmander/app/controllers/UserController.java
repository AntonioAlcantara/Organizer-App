package com.charmander.app.controllers;

import com.charmander.app.model.*;
import com.charmander.app.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashSet;
import java.util.Set;

@RestController("/v1/user")
public class UserController {

    @Autowired
    private IUserService iUserService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/register")
    public ResponseEntity<Boolean> registerUser(@RequestBody SignUpDto signUpDto) {
        return iUserService.createUser(signUpDto);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/login")
    public ResponseEntity<LoginInfoDto> login(@RequestHeader("AUTHORIZATION") String authorization) {
        String base64Credentials = authorization.substring("Basic".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        // credentials = username:password
        final String[] values = credentials.split(":", 2);
        return iUserService.login(values[1], values[2]);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/flat")
    public ResponseEntity<HashSet<FlatDto>> getFlatsFromUser(@RequestHeader("USER") Long id) {
        return iUserService.getFlats(id);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/event")
    public ResponseEntity<Set<EventDto>> getEventsFromUser(@RequestHeader("USER") Long id) {
        return null;
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/{nickname}")
    public ResponseEntity<Set<UserDto>> searchUser(@PathVariable String nickname) {
        return iUserService.searchUsers(nickname);
    }
}
