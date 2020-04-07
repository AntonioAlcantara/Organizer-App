package com.charmander.app.models.mapper;

import com.charmander.app.models.dto.UserDto;
import com.charmander.app.models.entity.User;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring")
public interface IUserMapper {

    UserDto toDto (User user);
    List<UserDto> toDtos (Collection<User> users);
}
