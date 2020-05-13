package com.charmander.app.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
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

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "user_flat",
            joinColumns = @JoinColumn(name = "flat_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"),
            schema = "organizer"
    )
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<User> users;

    @OneToMany(mappedBy = "flat", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Event> events;


}
