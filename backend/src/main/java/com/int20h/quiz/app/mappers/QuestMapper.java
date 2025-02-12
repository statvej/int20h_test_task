package com.int20h.quiz.app.mappers;

import com.int20h.quiz.app.entities.Quest;
import com.int20h.quiz.app.entities.Question;
import com.int20h.quiz.app.model.QuestDto;
import com.int20h.quiz.app.model.QuestionDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestMapper {

    // Mapping from Quest to QuestDto
    @Mapping(target = "userId", source = "quest.user.id")
    @Mapping(target = "questions", source = "quest.questions")
    QuestDto questToQuestDTO(Quest quest);

    // Mapping from QuestDto to Quest
    @Mapping(target = "user.id", source = "userId")
    @Mapping(target = "questions", source = "questions")
    Quest questDTOToQuest(QuestDto questDto);

    // Mapping from Question to QuestionDto
    @Mapping(target = "quest", source = "quest.id")
    @Mapping(target = "type", source = "type")
    @Mapping(target = "answers", source = "answers")
    @Mapping(target = "rightAnswersIndexes", source = "rightAnswersIndexes")
    QuestionDto questionToQuestionDTO(Question question);

    // Mapping from QuestionDto to Question
    @Mapping(target = "quest.id", source = "quest")
    @Mapping(target = "type", source = "type")
    @Mapping(target = "answers", source = "answers")
    @Mapping(target = "rightAnswersIndexes", source = "rightAnswersIndexes")
    Question questionDTOToQuestion(QuestionDto questionDto);
}
