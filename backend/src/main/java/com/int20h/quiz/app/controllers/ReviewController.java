package com.int20h.quiz.app.controllers;

import com.int20h.quiz.app.api.ReviewApi;
import com.int20h.quiz.app.model.ReviewDto;
import com.int20h.quiz.app.services.ReviewService;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReviewController implements ReviewApi {
  private final ReviewService reviewService;

  @Override
  public ResponseEntity<ReviewDto> apiReviewPost(ReviewDto reviewDto) {
    return new ResponseEntity<>(reviewService.createReview(reviewDto), HttpStatus.CREATED);
  }

  @Override
  public ResponseEntity<List<ReviewDto>> getReviewsByQuestId(UUID questId) {
    return new ResponseEntity<>(reviewService.getReviewsByQuestId(questId), HttpStatus.OK);
  }

}
