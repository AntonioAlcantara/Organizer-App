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
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 20)
    private String name;
    @Column(nullable = false, length = 50)
    private String surname;
    @Column(nullable = false, unique = true, length = 20)
    private String nickname;
    @Column(nullable = false, unique = true, length = 100)
    private String email;
    @Column(nullable = false, length = 60)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"),
            schema = "organizer"
    )
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Set<Role> roleUser;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private List<Flat> flats;

    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Event> events;

}
