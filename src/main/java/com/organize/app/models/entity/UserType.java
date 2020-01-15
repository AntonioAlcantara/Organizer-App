package com.organize.app.models.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(schema = "organizer")
public class UserType implements Serializable {

    @Id
    private String type;

    @OneToMany(mappedBy = "userType", cascade = CascadeType.ALL)
    private List<User> users;

}
