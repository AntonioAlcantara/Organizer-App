package com.organize.app.models.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Data
@Entity
@Table(name = "role", schema = "organizer")
public class Role implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 30)
    private String role;

    @ManyToMany(mappedBy = "roleUser", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Set<User> users;
}
