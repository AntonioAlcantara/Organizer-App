package com.charmander.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginInfoDto {

    private Long id;
    private String token;
}
