package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class SignUpDto {

    @NotNull @NotEmpty
    @Email(regexp=".@.\\..*", message = "Email should be valid")
    private String email;
    @NotNull @NotEmpty @Size(min = 1, max = 25)
    private String nickname;
    @NotNull @NotEmpty
    private String password;
    @NotNull @NotEmpty @Size(min = 1, max = 25)
    private String name;
    @NotNull @NotEmpty @Size(min = 1, max = 25)
    private String surname;
}
