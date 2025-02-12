package com.int20h.quiz.app.mappers;

import com.int20h.quiz.app.entities.Review;
import com.int20h.quiz.app.model.ReviewDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ReviewMapper {


  public Review dtoToEntity(ReviewDto reviewDto);

  @Mapping(target = "authorEmail", source = "review.user.email")
  @Mapping(target = "questId", source = "review.quest.id")
  public ReviewDto entityToDto(Review review);
}
