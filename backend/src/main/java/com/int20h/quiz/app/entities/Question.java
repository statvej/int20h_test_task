package com.int20h.quiz.app.entities;

import com.int20h.quiz.app.enums.QuestionTypes;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "QuestionMaster")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Quest quest;

    @Column(nullable = false)
    private QuestionTypes type;

    @Column
    private String multimedia;

    @Column
    private String question;

    @ElementCollection
    @CollectionTable(name = "quest_answers", joinColumns = @JoinColumn(name = "quest_id"))
    @Column(name = "answer")
    private List<String> answers;

    @ElementCollection
    @CollectionTable(name = "quest_answers_index", joinColumns = @JoinColumn(name = "quest_id"))
    @Column(name = "right_answers_index")
    private List<String> rightAnswersIndexes;

}
