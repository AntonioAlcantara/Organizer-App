package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Data
public class UserDto {

    @NotEmpty
    private String name;
    @NotEmpty
    private String surname;
    @NotEmpty
    private String email;
    @NotEmpty
    private String nickname;
    @NotEmpty
    private String role;
    private String city;
    private Set<FlatDto> flats;
    private Set<EventDto> events;
    
}
