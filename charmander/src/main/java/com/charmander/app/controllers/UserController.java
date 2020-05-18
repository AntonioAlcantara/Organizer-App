package com.charmander.app.controllers;

import com.charmander.app.model.*;
import com.charmander.app.service.user.IUserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/v1/user")
public class UserController {

    @Autowired
    private IUserService iUserService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/register")
    @ApiOperation(value = "Register a new user")
    public ResponseEntity<Boolean> registerUser(
            @ApiParam(value = "Sign up form", required = true) @Valid @RequestBody SignUpDto signUpDto
    ) {
        return iUserService.createUser(signUpDto);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/login")
    @ApiOperation(value = "Login", notes = "This method do the login")
    public ResponseEntity<LoginInfoDto> login(
            @ApiParam(value = "User credentials", required = true) @Valid @NotEmpty @RequestHeader("AUTHORIZATION") String authorization
    ) {
        String base64Credentials = authorization.substring("Basic".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        // credentials = username:password
        final String[] values = credentials.split(":", 2);
        return iUserService.login(values[1], values[2]);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/flat")
    @ApiOperation(value = "Get the basic information of the flats from the user")
    public ResponseEntity<List<FlatDto>> getFlatsFromUser(
            @ApiParam(value = "User id", required = true) @Valid @NotEmpty @RequestHeader("USER") Long id
    ) {
        return iUserService.getFlats(id);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/check/email")
    @ApiOperation(value = "Check if user exists by email")
    public ResponseEntity<Boolean> checkIfUserExistsByEmail(
            @ApiParam(value = "Email to check", required = true) @Valid @NotEmpty @RequestParam String email
    ) {
        return iUserService.existsUserByEmail(email);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/check/nickname/{nickname}")
    @ApiOperation(value = "Check if user exists by nickname")
    public ResponseEntity<Boolean> checkIfUserExistsByNickname(
            @ApiParam(value = "Nickname to check", required = true) @PathVariable String nickname
    ) {
        return iUserService.existsUserByNickname(nickname);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/event")
    @ApiOperation(value = "Get information of the active events from the user")
    public ResponseEntity<List<EventDto>> getActiveEventsFromUser(
            @ApiParam(value = "User id", required = true) @Valid @NotEmpty @RequestHeader("USER") Long id,
            @ApiParam(value = "If gets the completed headers or not", required = true) @RequestParam(defaultValue = "false") boolean completed
    ) {
        return iUserService.getEvents(id, completed);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/info")
    @ApiOperation(value = "Get information of the events from the user")
    public ResponseEntity<UserDto> getUserInfo(
            @ApiParam(value = "User id", required = true) @Valid @NotEmpty @RequestHeader("USER") Long id
    ) {
        return iUserService.getUserInfo(id);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/{nickname}")
    @ApiOperation(value = "Find users by nickname")
    public ResponseEntity<Set<UserLowInfoDto>> searchUser(
            @ApiParam(value = "Name for the search", required = true) @PathVariable String nickname
    ) {
        return iUserService.searchUsers(nickname);
    }
}
