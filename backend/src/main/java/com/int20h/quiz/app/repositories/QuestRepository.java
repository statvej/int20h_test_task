package com.int20h.quiz.app.repositories;

import java.util.Optional;
import java.util.UUID;
import com.int20h.quiz.app.entities.Quest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface QuestRepository extends JpaRepository<Quest, UUID> {
  Optional<Quest> findById(UUID id);
}
