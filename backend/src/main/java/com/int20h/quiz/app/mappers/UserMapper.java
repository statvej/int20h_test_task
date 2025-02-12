package com.int20h.quiz.app.mappers;

import com.int20h.quiz.app.entities.User;
import com.int20h.quiz.app.model.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface UserMapper {

  @Mapping(target = "email", source = "user.email")
  public UserDto entityToDto(User user);

  public User dtoToEntity(UserDto userDto);

}
