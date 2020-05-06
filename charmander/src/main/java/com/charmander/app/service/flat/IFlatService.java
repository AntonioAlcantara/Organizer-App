package com.charmander.app.service.flat;

import com.charmander.app.model.CreateFlatDto;
import com.charmander.app.model.EventDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IFlatService {

    ResponseEntity<Boolean> createFlat(CreateFlatDto flatDto);
    ResponseEntity<List<EventDto>> findEventsByFlat(Long flatId);
}
