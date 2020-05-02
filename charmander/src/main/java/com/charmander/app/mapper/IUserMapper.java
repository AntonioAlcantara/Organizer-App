package com.charmander.app.mapper;

import com.charmander.app.dto.UserDto;
import com.charmander.app.model.User;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IUserMapper {

    UserDto toDto (User user);
    List<UserDto> toDtos (Collection<User> users);
}
