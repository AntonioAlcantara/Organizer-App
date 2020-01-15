package com.organize.app.models.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(schema = "organizer")
public class Flat implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String address;

    @ManyToMany(mappedBy = "flats", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<User> users;

    @OneToMany(mappedBy = "flat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Event> events;


}
