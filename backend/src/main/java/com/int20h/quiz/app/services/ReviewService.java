package com.int20h.quiz.app.services;

import com.int20h.quiz.app.model.ReviewDto;
import com.int20h.quiz.app.repositories.QuestRepository;
import com.int20h.quiz.app.repositories.ReviewRepository;
import com.int20h.quiz.app.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {
  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;
  private final QuestRepository questRepository;

  public ReviewDto createReview(ReviewDto reviewDto) {
    final var user = userRepository.findByEmail(reviewDto.getAuthorEmail()).orElseThrow(() -> new RuntimeException("User not found"));
    final var quest = questRepository.findById(reviewDto.getQuestId()).orElseThrow(() -> new RuntimeException("Quest not found"));
    reviewRepository.save(ReviewDto.toEntity(reviewDto, user, quest));
    return null;
  }

}
