package com.int20h.quiz.app.controllers;

import com.int20h.quiz.app.api.QuestApi;
import com.int20h.quiz.app.model.QuestDto;
import com.int20h.quiz.app.services.QuestService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class QuestController implements QuestApi {

    private final QuestService questService;

    @Override
    public ResponseEntity<QuestDto> createQuest(QuestDto questDto) {
        return ResponseEntity.ok(questService.createQuest(questDto));
    }

    @Override
    public ResponseEntity<String> deleteQuest(UUID questId) {
        questService.deleteQuest(questId);
        return ResponseEntity.ok(questId + " deleted");
    }

    @Override
    public ResponseEntity<QuestDto> getQuest(UUID questId) {
        return ResponseEntity.ok(questService.getQuestById(questId));
    }

}
