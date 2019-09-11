# Pull maven image with jdk 8
FROM maven:3.6-jdk-8

# Set the working directory
WORKDIR /app

# Copy the pom.xml file
COPY pom.xml .

# Copy the project source
COPY src src

# Install dependencies
RUN mvn clean install -DskipTests
# RUN mvn -B -f /tmp/pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve

# Configure working directory
ADD target/spring-boot.jar spring-boot.jar

# Expose port for outside of container
EXPOSE 8080

# Define entrypoint
ENTRYPOINT ["java", "-jar", "spring-boot.jar"]
