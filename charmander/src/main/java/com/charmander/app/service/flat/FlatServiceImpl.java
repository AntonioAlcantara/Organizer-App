package com.charmander.app.service.flat;

import com.charmander.app.model.CreateFlatDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FlatServiceImpl implements IFlatService {
    @Override
    public ResponseEntity<Boolean> createFlat(CreateFlatDto flatDto) {
        return null;
    }
}
