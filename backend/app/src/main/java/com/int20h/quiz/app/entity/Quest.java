package com.int20h.quiz.app.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "Quest")
public class Quest {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User user;

    @OneToOne(mappedBy = "quest", cascade = CascadeType.ALL, orphanRemoval = true)
    private Review review;

    @OneToMany(mappedBy = "quest", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QuestionMaster> questions;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private Integer time_limit;

    @Column
    @DecimalMax(value = "5.0")
    private float average_rating;

    @Column
    private String multimedia;
}
