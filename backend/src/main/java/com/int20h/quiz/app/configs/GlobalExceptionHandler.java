package com.int20h.quiz.app.configs;

import com.int20h.quiz.app.exceptions.ApiException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

  // Handle exceptions of type ApiException (and its subclasses)
  @ExceptionHandler(ApiException.class)
  public ResponseEntity<Object> handleApiException(ApiException ex) {
    Map<String, Object> errorDetails = new LinkedHashMap<>();
    errorDetails.put("timestamp", LocalDateTime.now());
    errorDetails.put("status", ex.getStatus().value());
    errorDetails.put("error", ex.getStatus().getReasonPhrase());
    errorDetails.put("message", ex.getMessage());
    return new ResponseEntity<>(errorDetails, ex.getStatus());
  }

  // Fallback handler for any other exceptions not explicitly handled
  @ExceptionHandler(Exception.class)
  public ResponseEntity<Object> handleAllExceptions(Exception ex) {
    Map<String, Object> errorDetails = new LinkedHashMap<>();
    errorDetails.put("timestamp", LocalDateTime.now());
    errorDetails.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
    errorDetails.put("error", HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
    errorDetails.put("message", ex.getMessage());
    return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
