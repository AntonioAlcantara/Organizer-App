package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
public class CreateFlatDto {

    @NotEmpty @Size(min = 1, max = 25)
    private String name;
    @NotEmpty @Size(min = 1, max = 50)
    private String address;
    @NotEmpty
    private Set<Long> userIds;
}
