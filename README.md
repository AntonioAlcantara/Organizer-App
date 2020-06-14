# Organizer-App
Aplicación web para organizar pisos compartidos.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- [Docker](https://docs.docker.com/docker-for-windows/install/)
- [NodeJs](https://nodejs.org/es/) 
- [OpenJDK 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
- IDE (We recommend to use [IntelliJ](https://www.jetbrains.com/es-es/idea/) or [Visual Studio Code](https://code.visualstudio.com/))

## Running the tests

In a future versions we are gonna make this.

### Coding style

```
- Line Separator (LF)
- Indent 4 spaces
```

## Deployment

Use this commands in order:

```
- ./mvnw package
- docker-compose up -d
```
When the containers are up, go to [localhost](http://localhost) for see the frontend and
go to [API Swagger](http://localhost:8084/swagger-ui.html#/) for see the API documentation

## Built With

* [Angular](https://angular.io/docs) - The web framework used
* [NPM](https://docs.npmjs.com/) - Dependency Management
* [Maven](https://maven.apache.org/) - Dependency Management
* [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) - The backend framework used
* [Docker](https://docs.docker.com/) - Used for deploy the application

## Contributing

Please read [CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

In a future versions we are gonna make this.

## Authors

* **Antonio Alcántara** - *Initial work* - [AntonioAlcantara](https://github.com/AntonioAlcantara)
* **Silvia Marin** - *Initial work* - [SilviaMars](https://github.com/SylviaMars)

See also the list of [contributors](https://github.com/AntonioAlcantara/Organizer-App/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Hibernate Tutorial](https://vladmihalcea.com/tutorials/hibernate/)
* [Spring Boot initializer](https://start.spring.io/)
* Cool Communities for tutorials and for search information
  - [DEV](https://dev.to/)
