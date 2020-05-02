package com.charmander.app.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Set;

@Data
public class EventDto {

    private String title;
    private String description;
    private Double amount;
    private LocalDate startDate;
    private LocalDate endDate;
    private String eventType;
    private Set<RoomDto> rooms;
    private Set<UserDto> users;
    private String creator;
}
