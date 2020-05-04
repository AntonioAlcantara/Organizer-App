package com.charmander.app.model;

import lombok.Data;

import java.util.List;

@Data
public class FlatInfoDto {

    private Long id;
    private String name;
    private String address;
    List<UserLowInfoDto> users;
}
