package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class UserLowInfoDto {

    @NotEmpty
    private String name;
    @NotEmpty
    private String surname;
    @NotEmpty
    private String nickname;
}
