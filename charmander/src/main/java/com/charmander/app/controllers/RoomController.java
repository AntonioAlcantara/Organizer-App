package com.charmander.app.controllers;

import com.charmander.app.model.RoomDto;
import com.charmander.app.service.room.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Locale;
import java.util.Set;

@RestController
@RequestMapping("/v1/room")
public class RoomController {

    @Autowired private IRoomService iRoomService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/create/{name}/{locale}")
    public ResponseEntity<Void> createRoom(
            @Valid @NotNull @PathVariable Locale locale,
            @Valid @NotEmpty @PathVariable String name
    ) {
        return iRoomService.createRoom(name, locale);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/findAll/{locale}")
    public ResponseEntity<Set<RoomDto>> getRooms(
            @Valid @NotNull @PathVariable Locale locale
    ) {
        return iRoomService.findAllByLocale(locale);
    }
}
