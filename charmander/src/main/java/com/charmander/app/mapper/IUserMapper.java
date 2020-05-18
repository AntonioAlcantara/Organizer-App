package com.charmander.app.mapper;

import com.charmander.app.entity.Role;
import com.charmander.app.model.SignUpDto;
import com.charmander.app.model.UserDto;
import com.charmander.app.entity.User;
import com.charmander.app.model.UserLowInfoDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {IEventMapper.class, IFlatMapper.class})
public interface IUserMapper {

    User toUser (SignUpDto signUpDto);
    @Mapping(target = "roles", source="user.roleUser", qualifiedByName = "mapRole")
    UserDto toDto (User user);
    List<UserDto> toDtos (Collection<User> users);

    UserLowInfoDto toLowInfoDto (User user);
    List<UserLowInfoDto> toLowInfoDtos (Collection<User> users);

    @Named("mapRole")
    default Set<String> mapRole(Set<Role> roles) {
        if (roles == null) return new HashSet<>(List.of("USER"));
        return roles.parallelStream().map(Role::getRole).collect(Collectors.toSet());
    }
}
