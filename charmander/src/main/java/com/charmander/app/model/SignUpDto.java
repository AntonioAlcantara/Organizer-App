package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class SignUpDto {

    @NotEmpty
    @Email(regexp=".+@.+\\..+", message = "Email should be valid")
    private String email;
    @NotEmpty @Size(min = 1, max = 25)
    private String nickname;
    @NotEmpty
    private String password;
    @NotEmpty @Size(min = 1, max = 25)
    private String name;
    @NotEmpty @Size(min = 1, max = 25)
    private String surname;
}
