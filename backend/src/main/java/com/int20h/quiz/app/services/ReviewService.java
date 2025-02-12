package com.int20h.quiz.app.services;

import com.int20h.quiz.app.entities.Review;
import com.int20h.quiz.app.mappers.ReviewMapper;
import com.int20h.quiz.app.model.ReviewDto;
import com.int20h.quiz.app.repositories.QuestRepository;
import com.int20h.quiz.app.repositories.ReviewRepository;
import com.int20h.quiz.app.repositories.UserRepository;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {
  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;
  private final QuestRepository questRepository;
  private final ReviewMapper reviewMapper;

  public ReviewDto createReview(ReviewDto reviewDto) {
    final var user = userRepository.findByEmail(reviewDto.getAuthorEmail()).orElseThrow(() -> new RuntimeException("User not found"));
    final var quest = questRepository.findById(reviewDto.getQuestId()).orElseThrow(() -> new RuntimeException("Quest not found"));
    var review = reviewMapper.dtoToEntity(reviewDto);
    review.setUser(user);
    review.setQuest(quest);
    final var returnReview = reviewRepository.save(review);
    return reviewMapper.entityToDto(returnReview);
  }

  public List<ReviewDto> getReviewsByQuestId(UUID id) {
    final var reviews = reviewRepository.findAllByQuestId(id).orElseThrow(() -> new RuntimeException("Review not found"));
    return reviews.stream()
      .map(reviewMapper::entityToDto)
      .collect(Collectors.toList());
  }

}
