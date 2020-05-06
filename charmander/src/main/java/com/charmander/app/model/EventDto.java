package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.Set;

@Data
public class EventDto {

    @NotEmpty
    private String title;
    private String description;
    private Double amount;
    private LocalDate startDate;
    private LocalDate endDate;
    @NotEmpty
    private String eventType;
    @NotEmpty
    private Set<RoomDto> rooms;
    @NotEmpty
    private Set<UserDto> users;
    @NotEmpty
    private String creator;
}
