package com.int20h.quiz.app.controllers;

import com.int20h.quiz.app.api.UserApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserApi {
  @Override
  public ResponseEntity<Object> createUser(Object body) {
    return null;
  }

  @Override
  public ResponseEntity<Void> deleteUser(String userId) {
    return null;
  }

  @Override
  public ResponseEntity<Object> getUserById(String userId) {
    return null;
  }

  @Override
  public ResponseEntity<Object> updateUser(String userId, Object body) {
    return null;
  }
}
