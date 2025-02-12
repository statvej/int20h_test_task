package com.int20h.quiz.app.security;

import com.int20h.quiz.app.entities.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenProvider {

  @Value("${jwt.secret}")
  private String secretKey;

  @Value("${jwt.expiration}")
  private long expirationTime;

  private SecretKey key;

  @PostConstruct
  public void init() {
    // Ensure the secret key is strong enough
    byte[] decodedKey = Base64.getDecoder().decode(secretKey);
    key = Keys.hmacShaKeyFor(decodedKey);
  }

  public String generateToken(User user) {
    return Jwts.builder()
      .setSubject(user.getEmail())
      .claim("role", user.getRole().name())
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
      .signWith(key)
      .compact();
  }
}