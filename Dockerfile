FROM openjdk:13.0.2-slim-buster
VOLUME /tmp
EXPOSE 8090
ADD ./target/Organizer-App-0.0.1-SNAPSHOT.jar organizer-backend.jar
ENTRYPOINT ["java", "-jar", "/organizer-backend.jar"]