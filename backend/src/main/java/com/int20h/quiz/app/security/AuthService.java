package com.int20h.quiz.app.security;

import com.int20h.quiz.app.entity.User;
import com.int20h.quiz.app.entity.VerificationToken;
import com.int20h.quiz.app.enums.Role;
import com.int20h.quiz.app.repositories.UserRepository;
import com.int20h.quiz.app.repositories.VerificationTokenRepository;
import com.int20h.quiz.app.services.EmailService;
import jakarta.transaction.Transactional;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  private final EmailService emailService;
  private final VerificationTokenRepository verificationTokenRepository;

  @Transactional
  public String registerUser(String email, String password, String username) {
    if (userRepository.existsByEmail(email)) {
      throw new RuntimeException("Email already registered.");
    }

    String encodedPassword = passwordEncoder.encode(password);
    User user = User.builder()
      .email(email)
      .password(encodedPassword)
      .username(username)
      .role(Role.USER)
      .verified(false) // User is disabled until verified
      .build();

    userRepository.save(user);

    // Generate a verification token
    String token = UUID.randomUUID().toString();
    VerificationToken verificationToken = new VerificationToken(token, user);
    verificationTokenRepository.save(verificationToken);

    // Send verification email
    sendVerificationEmail(user.getEmail(), token);

    return "Registration successful. Please check your email to verify your account.";
  }

  public String loginUser(String email, String password) {
    User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Invalid credentials"));

    if (!passwordEncoder.matches(password, user.getPassword())) {
      throw new RuntimeException("Invalid credentials");
    }

    if (!user.isVerified()) {
      throw new RuntimeException("Email not verified. Please check your email.");
    }

    return jwtTokenProvider.generateToken(user);
  }

  public String verifyEmail(String token) {
    Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);

    if (verificationToken.isEmpty()) {
      throw new RuntimeException("Invalid or expired verification token.");
    }

    User user = verificationToken.get().getUser();
    user.setVerified(true);
    userRepository.save(user);

    // Delete the token after verification
    verificationTokenRepository.delete(verificationToken.get());

    return "Email verified successfully. You can now log in.";
  }

  private void sendVerificationEmail(String email, String token) {
    String confirmationUrl = "http://localhost:8080/auth/verify?token=" + token;

    emailService.sendSimpleEmail(email, "Verify your email for ThinkExe",
                                 "Please click the link below to verify your email:\n" + confirmationUrl);
  }
}

