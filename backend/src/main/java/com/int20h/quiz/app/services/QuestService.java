package com.int20h.quiz.app.services;

import com.int20h.quiz.app.entities.Quest;
import com.int20h.quiz.app.entities.User;
import com.int20h.quiz.app.mappers.QuestMapper;
import com.int20h.quiz.app.model.QuestDto;
import com.int20h.quiz.app.repositories.QuestRepository;
import com.int20h.quiz.app.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
@AllArgsConstructor
public class QuestService {

    private final QuestRepository questRepository;
    private final QuestMapper questMapper;
    private final UserRepository userRepository;

    public QuestDto createQuest(QuestDto questDto) {
        Quest quest = questMapper.questDTOToQuest(questDto);

        User user = userRepository.findById(questDto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        quest.setUser(user);
        return questMapper.questToQuestDTO(questRepository.save(quest));
    }

    public QuestDto getQuestById(UUID id) {
        return questMapper.questToQuestDTO(questRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Quest with ID " + id + " not found")));
    }

    public void deleteQuest(UUID questId) {
        questRepository.deleteById(questId);
    }

}
