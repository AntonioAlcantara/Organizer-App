package com.charmander.app.service.flat;

import com.charmander.app.entity.Flat;
import com.charmander.app.entity.User;
import com.charmander.app.mapper.IEventMapper;
import com.charmander.app.model.CreateFlatDto;
import com.charmander.app.model.EventDto;
import com.charmander.app.repository.FlatRepository;
import com.charmander.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class FlatServiceImpl implements IFlatService {

    @Autowired private UserRepository userRepo;
    @Autowired private FlatRepository flatRepo;
    @Autowired private IEventMapper iEventMapper;

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

    @Override
    public ResponseEntity<List<EventDto>> findEventsByFlat(Long flatId) {
        var events = flatRepo.findById(flatId).map( flat -> iEventMapper.toDtos(flat.getEvents())).orElseThrow();
        return new ResponseEntity<>(events, (events.isEmpty()) ? HttpStatus.NO_CONTENT : HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> addUserToFlat(Set<Long> userIds, Long flatId) {
        Set<User> userList = new HashSet<>();
        userRepo.findAllById(userIds).forEach(userList::add);
        var flat = flatRepo.findById(flatId).orElseThrow();
        if (!userList.isEmpty()) {
            flat.setUsers(userList);
            flatRepo.save(flat);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
