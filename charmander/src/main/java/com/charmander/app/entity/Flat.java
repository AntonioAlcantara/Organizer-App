package com.charmander.app.entity;

import lombok.Data;
import lombok.ToString;

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
    @Column(nullable = false, length = 50)
    private String name;
    @Column(nullable = false, length = 100)
    private String address;

    @ToString.Exclude
    @ManyToMany(mappedBy = "flats", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<User> users;

    @OneToMany(mappedBy = "flat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Event> events;


}
