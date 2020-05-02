package com.charmander.app.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/v1/flat")
public class FlatController {

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/create")
    public ResponseEntity<Boolean> createFlat() {
        return null;
    }
}
