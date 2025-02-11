package com.int20h.quiz.app.repositories;

import com.int20h.quiz.app.entity.VerificationToken;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
  Optional<VerificationToken> findByToken(String token);
}
