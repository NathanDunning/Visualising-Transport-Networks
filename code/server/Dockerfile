# Pull maven image with jdk 8
FROM maven:3.6-jdk-8

# Configure working directory
ADD target/spring-boot.jar spring-boot.jar

#COPY pom.xml /tmp/pom.xml
#RUN mvn -B -f /tmp/pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve

# Expose port for outside of container
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "spring-boot.jar"]
