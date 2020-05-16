package com.charmander.app.controllers;

import com.charmander.app.model.CreateFlatDto;
import com.charmander.app.model.EventDto;
import com.charmander.app.service.flat.IFlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/v1/flat")
public class FlatController {

    @Autowired private IFlatService iFlatService;

    @CrossOrigin(maxAge = 3600)
    @PostMapping("/create")
    public ResponseEntity<Boolean> createFlat(@Valid @RequestBody CreateFlatDto flat) {
        return iFlatService.createFlat(flat);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/find/event/{flatId}")
    public ResponseEntity<List<EventDto>> findEventsByFlat(@PathVariable Long flatId) {
        return iFlatService.findEventsByFlat(flatId);
    }

    @CrossOrigin(maxAge = 3600)
    @PutMapping("{flatId}/add/user")
    public ResponseEntity<Void> addUserToFlat(
            @Valid @NotEmpty @RequestBody Set<Long> userIds,
            @Valid @NotNull @PathVariable Long flatId
    ) {
        return iFlatService.addUserToFlat(userIds, flatId);
    }
}
