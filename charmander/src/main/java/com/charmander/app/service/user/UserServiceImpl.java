package com.charmander.app.service.user;

import com.charmander.app.entity.Role;
import com.charmander.app.entity.User;
import com.charmander.app.mapper.IEventMapper;
import com.charmander.app.mapper.IFlatMapper;
import com.charmander.app.mapper.IUserMapper;
import com.charmander.app.model.*;
import com.charmander.app.repository.RoleRepository;
import com.charmander.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements  IUserService {

    @Autowired private UserRepository userRepo;
    @Autowired private IUserMapper iUserMapper;
    @Autowired private IFlatMapper iFlatMapper;
    @Autowired private IEventMapper iEventMapper;
    @Autowired private RoleRepository roleRepo;

    @Override
    public ResponseEntity<LoginInfoDto> login(String email, String password) {
        var user = userRepo.findByEmailAndPassword(email, password).orElse(null);
        return (user != null) ? new ResponseEntity<>(
                new LoginInfoDto(user.getId(), "isLogged"), HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<Boolean> createUser(SignUpDto signUpDto) {
        if (userRepo.findByEmail(signUpDto.getEmail()).isEmpty()) {
            User user = iUserMapper.toUser(signUpDto);
            Set<Role> roles = new HashSet<>();
            roleRepo.findById(1L).map(roles::add).orElseThrow();
            user.setRoleUser(roles);
            userRepo.save(user);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @Override
    public boolean existsUser(String email) {
        return userRepo.findByEmail(email).isPresent();
    }

    @Override
    public ResponseEntity<UserDto> getUserInfo(Long userId) {
        var user = userRepo.findById(userId);
        return user.map(value -> new ResponseEntity<>(iUserMapper.toDto(value), HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NO_CONTENT));
    }

    @Override
    public ResponseEntity<HashSet<FlatDto>> getFlats(Long userId) {
        var user = userRepo.findById(userId);
        return user.map(value -> new ResponseEntity<>(new HashSet<>(iFlatMapper.toDtos(value.getFlats())), HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NO_CONTENT));
    }

    @Override
    public ResponseEntity<HashSet<EventDto>> getEvents(Long userId) {
        var user = userRepo.findById(userId);
        return user.map(value -> new ResponseEntity<>(new HashSet<>(iEventMapper.toDtos(value.getEvents())), HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NO_CONTENT));
    }
}
