package com.int20h.quiz.app.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import org.springframework.lang.Nullable;
import java.io.Serializable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * UserDto
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", comments = "Generator version: 7.11.0")
public class UserDto implements Serializable {

  private static final long serialVersionUID = 1L;

  private @Nullable String id;

  private String username;

  private @Nullable String password;

  private String email;

  private @Nullable String profilePicture;

  private @Nullable BigDecimal averageQuizRating;

  public UserDto() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public UserDto(String username, String email) {
    this.username = username;
    this.email = email;
  }

  public UserDto id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  
  @Schema(name = "id", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("id")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public UserDto username(String username) {
    this.username = username;
    return this;
  }

  /**
   * Get username
   * @return username
   */
  @NotNull 
  @Schema(name = "username", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("username")
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public UserDto password(String password) {
    this.password = password;
    return this;
  }

  /**
   * Get password
   * @return password
   */
  
  @Schema(name = "password", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("password")
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public UserDto email(String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @NotNull @jakarta.validation.constraints.Email 
  @Schema(name = "email", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("email")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public UserDto profilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
    return this;
  }

  /**
   * Get profilePicture
   * @return profilePicture
   */
  
  @Schema(name = "profilePicture", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("profilePicture")
  public String getProfilePicture() {
    return profilePicture;
  }

  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }

  public UserDto averageQuizRating(BigDecimal averageQuizRating) {
    this.averageQuizRating = averageQuizRating;
    return this;
  }

  /**
   * Get averageQuizRating
   * @return averageQuizRating
   */
  @Valid 
  @Schema(name = "averageQuizRating", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("averageQuizRating")
  public BigDecimal getAverageQuizRating() {
    return averageQuizRating;
  }

  public void setAverageQuizRating(BigDecimal averageQuizRating) {
    this.averageQuizRating = averageQuizRating;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserDto userDto = (UserDto) o;
    return Objects.equals(this.id, userDto.id) &&
        Objects.equals(this.username, userDto.username) &&
        Objects.equals(this.password, userDto.password) &&
        Objects.equals(this.email, userDto.email) &&
        Objects.equals(this.profilePicture, userDto.profilePicture) &&
        Objects.equals(this.averageQuizRating, userDto.averageQuizRating);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, password, email, profilePicture, averageQuizRating);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserDto {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    profilePicture: ").append(toIndentedString(profilePicture)).append("\n");
    sb.append("    averageQuizRating: ").append(toIndentedString(averageQuizRating)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

