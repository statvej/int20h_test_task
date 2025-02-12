package com.int20h.quiz.app.mappers;

import com.int20h.quiz.app.entity.Review;
import com.int20h.quiz.app.model.ReviewDto;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ReviewMapper {


  public Review dtoToEntity(ReviewDto reviewDto);

  public ReviewDto entityToDto(Review review);
}
