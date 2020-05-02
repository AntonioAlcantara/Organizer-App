package com.charmander.app.service.flat;

import com.charmander.app.entity.Flat;
import com.charmander.app.entity.User;
import com.charmander.app.model.CreateFlatDto;
import com.charmander.app.repository.FlatRepository;
import com.charmander.app.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class FlatServiceImpl implements IFlatService {

    private UserRepository userRepo;
    private FlatRepository flatRepo;

    @Override
    public ResponseEntity<Boolean> createFlat(CreateFlatDto flatDto) {
        Set<User> userList = new HashSet<>();
        userRepo.findAllById(flatDto.getUserIds()).forEach(userList::add);
        if (!userList.isEmpty()) {
            Flat flat = new Flat();
            flat.setName(flatDto.getName());
            flat.setAddress(flatDto.getAddress());
            flat.setUsers(userList);
            flatRepo.save(flat);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
