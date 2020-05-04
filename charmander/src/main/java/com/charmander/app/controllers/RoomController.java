package com.charmander.app.controllers;

import com.charmander.app.model.RoomDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;
import java.util.Set;

@RestController
@RequestMapping("/v1/room")
public class RoomController {

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/findAll")
    public ResponseEntity<Set<RoomDto>> getRooms(Locale locale) {
        return null;
    }
}
