package com.int20h.quiz.app.security;

import static org.springframework.security.config.Customizer.withDefaults;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.util.Collections;
import java.util.List;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Value("${jwt.secret}")
  private String secretKey;

  @Bean
  @Profile("oauth2")
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
      // Enable CORS support using the default settings (which will pick up our CorsConfigurationSource bean)
      .cors(withDefaults())
      // Disable CSRF (as needed for stateless APIs)
      .csrf(csrf -> csrf.disable())
      // Use stateless session management
      .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      // Configure URL-based authorization rules
      .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/**")
        .permitAll()
        .requestMatchers("/openapi/**")
        .permitAll()
        .requestMatchers("/api/**")
        .permitAll()
        )
      // Configure the OAuth2 resource server with JWT support
      .oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter())));

    return http.build();
  }

  @Bean
  @Profile("dev")
  public SecurityFilterChain securityFilterChainDev(HttpSecurity http) throws Exception {
    http
      // Enable CORS support using the default settings (which will pick up our CorsConfigurationSource bean)
      .cors(withDefaults())
      // Disable CSRF (as needed for stateless APIs)
      .csrf(AbstractHttpConfigurer::disable)
      // Use stateless session management
      .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      // Configure URL-based authorization rules
      .authorizeHttpRequests(auth -> auth
        .anyRequest()
        .permitAll());

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtAuthenticationConverter authenticationConverter = new JwtAuthenticationConverter();
    authenticationConverter.setJwtGrantedAuthoritiesConverter(jwt -> {
      String role = jwt.getClaimAsString("role");  // Extract "role" claim
      if (role == null) {
        return Collections.emptyList();
      }
      return List.of(new SimpleGrantedAuthority("ROLE_" + role));  // Convert to GrantedAuthority
    });
    return authenticationConverter;
  }

  @Bean
  public JwtDecoder jwtDecoder() {
    byte[] keyBytes = Decoders.BASE64.decode(secretKey);
    SecretKey key = Keys.hmacShaKeyFor(keyBytes);
    return NimbusJwtDecoder.withSecretKey(key).build();
  }

}