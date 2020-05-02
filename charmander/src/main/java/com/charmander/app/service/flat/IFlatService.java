package com.charmander.app.service.flat;

import com.charmander.app.model.CreateFlatDto;
import org.springframework.http.ResponseEntity;

public interface IFlatService {

    ResponseEntity<Boolean> createFlat(CreateFlatDto flatDto);
}
