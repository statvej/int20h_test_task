package com.int20h.quiz.app.services;

import com.int20h.quiz.app.entities.Quest;
import com.int20h.quiz.app.mappers.QuestMapper;
import com.int20h.quiz.app.model.QuestDto;
import com.int20h.quiz.app.repositories.QuestRepository;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class QuestService {

    QuestRepository questRepository;
    QuestMapper questMapper;

    public QuestDto getQuestById(UUID id) {
        return questMapper.questToQuestDTO(questRepository.findById(id).orElseThrow());
    }

    public Quest updateQuest(QuestDto questDto) {
        return questRepository.save(questMapper.questDTOToQuest(questDto));
    }

}
