package com.charmander.app.model;

import lombok.Data;

import java.util.Set;

@Data
public class CreateFlatDto {

    private String name;
    private String address;
    private Set<Long> userIds;
}
