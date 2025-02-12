package com.int20h.quiz.app.exceptions;

import org.springframework.http.HttpStatus;

public class ResourceNotFoundException extends ApiException {
  public ResourceNotFoundException(String message) {
    super(message, HttpStatus.NOT_FOUND);
  }
}