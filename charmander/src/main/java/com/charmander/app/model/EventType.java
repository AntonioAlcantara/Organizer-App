package com.charmander.app.model;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "event_type", schema = "organizer")
public class EventType implements Serializable {

    @Id
    @Column(nullable = false, length = 50, unique = true)
    private String type;

    @Transient
    @ToString.Exclude
    @OneToMany(mappedBy = "eventType", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Event> events;
}
