package com.int20h.quiz.app.controllers;

import com.int20h.quiz.app.api.UserApi;
import com.int20h.quiz.app.model.UserDto;
import com.int20h.quiz.app.services.UserService;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController implements UserApi {
  private final UserService userService;


  @Override
  public ResponseEntity<Void> deleteUser(String userId) {
    return null;
  }

  @Override
  public ResponseEntity<UserDto> getUserByEmail(String email) {
    return ResponseEntity.ok(userService.getUserByEmail(email));
  }

  @Override
  public ResponseEntity<UserDto> getUserById(UUID userId) {
    return ResponseEntity.ok(userService.getUserById(userId));
  }

  @Override
  public ResponseEntity<UserDto> updateUser(String userId, UserDto userDto) {
    return null;
  }
}
