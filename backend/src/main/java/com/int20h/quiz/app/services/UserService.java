package com.int20h.quiz.app.services;

import com.int20h.quiz.app.exceptions.ResourceNotFoundException;
import com.int20h.quiz.app.mappers.UserMapper;
import com.int20h.quiz.app.model.UserDto;
import com.int20h.quiz.app.repositories.UserRepository;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;
  private final UserMapper userMapper;

  public UserDto getUserByEmail(String email) {
    return userMapper.entityToDto(userRepository.findByEmail(email)
        .orElseThrow(() -> new ResourceNotFoundException("User with email " + email + " not found")));
  }

  public UserDto getUserById(UUID id) {
    return userMapper.entityToDto(userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " not found")));
  }

}
