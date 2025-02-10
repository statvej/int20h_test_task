package com.int20h.quiz.app.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "QuestionMaster")
public class QuestionMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Id
    private UUID slaveId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Quest quest;

    @Column(nullable = false)
    private int type;

    @Column
    private String multimedia;
}
