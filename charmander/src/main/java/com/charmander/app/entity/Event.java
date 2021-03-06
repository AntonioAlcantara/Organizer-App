package com.charmander.app.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(schema = "organizer")
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 50)
    private String title;
    @Column(length = 200)
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
    @Column(nullable = false, length = 50)
    private long creator;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "event_type", nullable = false, referencedColumnName = "type")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private EventType eventType;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "user_event",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"),
            schema = "organizer"
    )
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<User> users;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "event_flat", nullable = false, referencedColumnName = "id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
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
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Room> rooms;

}
