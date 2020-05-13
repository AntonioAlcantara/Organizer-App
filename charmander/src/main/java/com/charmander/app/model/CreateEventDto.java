package com.charmander.app.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Set;

@Data
public class CreateEventDto {

    @NotEmpty
    private String title;
    private String description;
    private Double amount;
    private LocalDate startDate;
    private LocalDate endDate;
    @NotEmpty
    private String eventType;
    @NotEmpty
    private Set<Long> roomIds;
    @NotEmpty
    private Set<Long> userIds;
    @NotNull
    private long flatId;
}
