package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
public class CreateFlatDto {

    @NotNull @NotEmpty @Size(min = 1, max = 25)
    private String name;
    @NotNull @NotEmpty @Size(min = 1, max = 50)
    private String address;
    private Set<Long> userIds;
}
