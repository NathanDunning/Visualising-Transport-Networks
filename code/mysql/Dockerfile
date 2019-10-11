FROM mysql:8.0.17

ADD ./code/mysql/data_dump /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=react_spring

