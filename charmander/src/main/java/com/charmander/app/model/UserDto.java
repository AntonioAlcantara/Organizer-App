package com.charmander.app.model;

import lombok.Data;

import java.util.Set;

@Data
public class UserDto {

    private String name;
    private String surname;
    private String email;
    private String nickname;
    private String role;
    private Set<FlatDto> flats;
    private Set<EventDto> events;
    
}
