FROM openjdk:13.0.2-slim-buster
VOLUME /tmp
EXPOSE 8084
ADD charmander/target/charmander-0.0.1-SNAPSHOT.jar charmander.jar
ENTRYPOINT ["java", "-jar", "/organizer-backend.jar"]