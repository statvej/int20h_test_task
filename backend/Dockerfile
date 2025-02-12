FROM amazoncorretto:21

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
