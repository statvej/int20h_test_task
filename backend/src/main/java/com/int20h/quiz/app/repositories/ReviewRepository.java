package com.int20h.quiz.app.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import com.int20h.quiz.app.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ReviewRepository extends JpaRepository<Review, UUID> {
    Optional<List<Review>> findAllByQuestId(UUID questId);

}
