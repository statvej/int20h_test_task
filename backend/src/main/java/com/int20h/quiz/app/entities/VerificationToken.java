package com.int20h.quiz.app.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "VerificationToken")
public class VerificationToken {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private String token;

  @OneToOne
  @JoinColumn(name = "user_id")
  private User user;

  private LocalDateTime expiryDate;

  public VerificationToken(String token, User user) {
    this.token = token;
    this.user = user;
    this.expiryDate = LocalDateTime.now().plusHours(24); // Token valid for 24 hours
  }
}