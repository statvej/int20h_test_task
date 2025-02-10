package com.int20h.quiz.app.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
@Table
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private Users user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quest_id")
    private Quest quest;

    @Column
    private String content;

    @Column(nullable = false)
    @DecimalMax(value = "5.0")
    private float rating;


}
