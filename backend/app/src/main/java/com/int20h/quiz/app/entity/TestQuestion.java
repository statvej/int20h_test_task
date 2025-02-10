package com.int20h.quiz.app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table
@Getter
@Setter
public class TestQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

}
