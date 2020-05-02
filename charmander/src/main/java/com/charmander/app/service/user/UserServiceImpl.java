package com.charmander.app.service.user;

import com.charmander.app.entity.User;
import com.charmander.app.mapper.IUserMapper;
import com.charmander.app.model.LoginInfoDto;
import com.charmander.app.model.SignUpDto;
import com.charmander.app.model.UserDto;
import com.charmander.app.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements  IUserService {

    private UserRepository userRepo;
    private IUserMapper iUserMapper;

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
            userRepo.save(user);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public boolean existsUser(String email) {
        return userRepo.findByEmail(email).isPresent();
    }

    @Override
    public ResponseEntity<UserDto> getUserInfo(Long id) {
        var user = userRepo.findById(id);
        return (user.isPresent()) ? new ResponseEntity<>(null, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
