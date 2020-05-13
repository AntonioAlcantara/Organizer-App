package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.List;

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
    private List<RoomDto> rooms;
    @NotEmpty
    private List<UserLowInfoDto> users;
    @NotEmpty
    private String creator;
}
