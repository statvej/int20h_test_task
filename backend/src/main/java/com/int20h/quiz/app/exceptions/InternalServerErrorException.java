package com.int20h.quiz.app.exceptions;

import org.springframework.http.HttpStatus;

public class InternalServerErrorException extends ApiException {
  public InternalServerErrorException(String message) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
