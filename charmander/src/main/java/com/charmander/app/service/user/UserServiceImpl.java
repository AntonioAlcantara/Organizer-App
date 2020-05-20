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

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements  IUserService {

    @Autowired private UserRepository userRepo;
    @Autowired private IUserMapper iUserMapper;
    @Autowired private IFlatMapper iFlatMapper;
    @Autowired private IEventMapper iEventMapper;
    @Autowired private RoleRepository roleRepo;

    @Override
    public ResponseEntity<LoginInfoDto> login(String email, String password) {
        var user = userRepo.findByNicknameAndPassword(email, password).orElse(null);
        return (user != null) ? new ResponseEntity<>(
                new LoginInfoDto(user.getId(), "isLogged"), HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<Boolean> createUser(SignUpDto signUpDto) {
        if (userRepo.findByEmail(signUpDto.getEmail()).isEmpty()) {
            User user = iUserMapper.toUser(signUpDto);
            Set<Role> roles = new HashSet<>();
            var role = roleRepo.findById(1L).orElseThrow();
            roles.add(role);
            user.setRoleUser(roles);
            userRepo.save(user);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @Override
    public ResponseEntity<Boolean> existsUserByEmail(String email) {
        return (userRepo.findByEmail(email).isPresent()) ? new ResponseEntity<>(true, HttpStatus.OK) :
                                                           new ResponseEntity<>(false, HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<Boolean> existsUserByNickname(String nickname) {
        return (userRepo.findByNickname(nickname).isPresent()) ? new ResponseEntity<>(true, HttpStatus.OK) :
                new ResponseEntity<>(false, HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<UserDto> getUserInfo(Long userId) {
        var user = userRepo.findById(userId);
        return user.map(value -> new ResponseEntity<>(iUserMapper.toDto(value), HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }

    @Override
    public ResponseEntity<List<FlatDto>> getFlats(Long userId) {
        var user = userRepo.findById(userId);
        return user.map(value -> new ResponseEntity<>
                (
                    iFlatMapper.toDtos(value.getFlats()),
                    (value.getFlats().isEmpty()) ? HttpStatus.NO_CONTENT : HttpStatus.OK
                )
        ).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @Override
    public ResponseEntity<List<EventDto>> getEvents(Long userId, boolean completed) {
        var user = userRepo.findById(userId);
        return user.map(value -> {
            if (value.getEvents().isEmpty()) {
                return new ResponseEntity<> (iEventMapper.toDtos(value.getEvents()) , HttpStatus.NO_CONTENT);
            } else {
                Map<Long, Long> creatorMap = new HashMap<>();
                var events = value.getEvents().parallelStream()
                                              .filter(event -> event.isCompleted() == completed)
                                              .peek(event -> creatorMap.put(event.getId(), event.getCreator()))
                                              .collect(Collectors.toList());
                var eventDtos = iEventMapper.toDtos(events);
                eventDtos.forEach(eventDto -> {
                    var creator = userRepo.findById(creatorMap.get(eventDto.getId())).orElse(new User());
                    eventDto.setCreator(creator.getNickname());
                });
                return new ResponseEntity<> (eventDtos , HttpStatus.OK);
            }
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @Override
    public ResponseEntity<Set<UserLowInfoDto>> searchUsers(String nickname) {
        var inputSearch = "%" + nickname + "%";
        var users = userRepo.findAllByNickname(inputSearch);
        Set<UserLowInfoDto> userDtoList = new HashSet<>(iUserMapper.toLowInfoDtos(users));
        return (!userDtoList.isEmpty()) ? new ResponseEntity<>(userDtoList, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
