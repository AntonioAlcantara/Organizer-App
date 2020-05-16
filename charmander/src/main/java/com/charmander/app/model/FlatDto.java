package com.charmander.app.model;

import lombok.Data;

import java.util.Set;

@Data
public class FlatDto {

    private Long id;
    private String name;
    private String address;
    private Set<UserLowInfoDto> users;
}
