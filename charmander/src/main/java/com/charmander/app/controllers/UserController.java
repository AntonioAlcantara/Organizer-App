package com.charmander.app.controllers;

import com.charmander.app.model.LoginInfoDto;
import com.charmander.app.model.SignUpDto;
import com.charmander.app.service.user.IUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController("/v1/user")
public class UserController {

    private IUserService iUserService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/create")
    public ResponseEntity<Boolean> createUser(@RequestBody SignUpDto signUpDto) {
        return null;
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
}
