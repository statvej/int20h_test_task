package com.int20h.quiz.app.controllers;

import com.int20h.quiz.app.api.AuthApi;
import com.int20h.quiz.app.model.AuthMessage;
import com.int20h.quiz.app.model.AuthResponse;
import com.int20h.quiz.app.model.LoginRequest;
import com.int20h.quiz.app.model.RegisterRequest;
import com.int20h.quiz.app.security.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController implements AuthApi {
  private final AuthService authService;

  @Override
  public ResponseEntity<AuthResponse> authLoginPost(LoginRequest loginRequest) {
    String token = authService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
    return ResponseEntity.ok(new AuthResponse().token(token));
  }

  @Override
  public ResponseEntity<AuthMessage> authRegisterPost(RegisterRequest registerRequest) {
    String message = authService.registerUser(registerRequest.getEmail(), registerRequest.getPassword(), registerRequest.getUsername());
    return ResponseEntity.ok(new AuthMessage().message(message));
  }

  @Override
  public ResponseEntity<AuthMessage> authVerifyGet(String token) {
    final var response = authService.verifyEmail(token);
    return ResponseEntity.ok(new AuthMessage().message(response));
  }
}
