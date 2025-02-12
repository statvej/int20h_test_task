package com.int20h.quiz.app.services;

import com.int20h.quiz.app.exceptions.InternalServerErrorException;
import com.int20h.quiz.app.exceptions.ResourceNotFoundException;
import com.int20h.quiz.app.mappers.ReviewMapper;
import com.int20h.quiz.app.model.ReviewDto;
import com.int20h.quiz.app.repositories.QuestRepository;
import com.int20h.quiz.app.repositories.ReviewRepository;
import com.int20h.quiz.app.repositories.UserRepository;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class































ReviewService {
  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;
  private final QuestRepository questRepository;
  private final ReviewMapper reviewMapper;

  public ReviewDto createReview(ReviewDto reviewDto) {
    final var user = userRepository.findByEmail(reviewDto.getAuthorEmail()).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    final var quest = questRepository.findById(reviewDto.getQuestId()).orElseThrow(() -> new ResourceNotFoundException("Quest not found"));
    try {
      var review = reviewMapper.dtoToEntity(reviewDto);
      review.setUser(user);
      review.setQuest(quest);
      final var returnReview = reviewRepository.save(review);
      return reviewMapper.entityToDto(returnReview);
    }
    catch (Exception e) {
      throw new InternalServerErrorException("Failed to create review");
    }
  }

  public List<ReviewDto> getReviewsByQuestId(UUID id) {
    final var reviews = reviewRepository.findAllByQuestId(id).orElseThrow(() -> new RuntimeException("Review not found"));
    return reviews.stream()
      .map(reviewMapper::entityToDto)
      .toList();
  }

}
