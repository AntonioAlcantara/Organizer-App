package com.organize.app.models.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(schema = "organizer")
public class EventType implements Serializable {

    @Id
    private String type;

    @OneToMany(mappedBy = "eventType", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Event> events;
}
