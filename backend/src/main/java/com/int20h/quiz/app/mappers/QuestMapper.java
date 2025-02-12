package com.int20h.quiz.app.mappers;

import com.int20h.quiz.app.entities.Quest;
import com.int20h.quiz.app.model.QuestDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface QuestMapper {
    QuestMapper INSTANCE = Mappers.getMapper(QuestMapper.class);

    @Mapping(target = "userId", source = "quest.user.id")
    QuestDto questToQuestDTO(Quest quest);
    Quest questDTOToQuest(QuestDto questDto);
}
