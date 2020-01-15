package com.organize.app.models.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
@Table(schema = "organizer")
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    private String description;
    private Double amount;
    @CreationTimestamp
    @Column(name = "creation_date")
    private Timestamp creationDate;
    @UpdateTimestamp
    @Column(name = "modify_date")
    private Timestamp modifyDate;
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;
    @Column(name = "end_date")
    private LocalDate endDate;
    private boolean completed;
    private boolean active;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "event_type", nullable = false, referencedColumnName = "type")
    private EventType eventType;

    @ManyToMany(mappedBy = "events", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<User> users;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "event_flat", nullable = false, referencedColumnName = "flat_id")
    private Flat flat;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "event_room",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "room_id"),
            schema = "organizer"
    )
    private Set<Room> rooms;

}
