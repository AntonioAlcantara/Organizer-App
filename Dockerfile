FROM openjdk:13.0.2-slim-buster
VOLUME /tmp
EXPOSE 8084
ADD charmander/target/charmander-0.0.1-SNAPSHOT.jar charmander.jar
ENTRYPOINT ["java", "-jar", "/charmander.jar"]

FROM openjdk:13.0.2-slim-buster
VOLUME /tmp
EXPOSE 8085
ADD eevee/target/eevee-0.0.1-SNAPSHOT.jar eevee.jar
ENTRYPOINT ["java", "-jar", "/eevee.jar"]