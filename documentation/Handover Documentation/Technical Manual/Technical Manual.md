# Technical Manual

**Project 7:** Visualising our Transport Networks<br>
**Client:** Chris Vallyon<br>
**Date:** 11 October 2019<br>

<!-- This document is code documentation for our project. It can describe the code architecture and semantics of each package. It can include code snippets if needed to describe code behaviour. -->

### 1. Introduction <TO DO>

The User Manual contains all essential information for the user to make full use of the project - Visualising Transport Networks, developed as part of the coursework of ENGR 301 and ENGR 302. This manual includes a description of the system functions and capabilities, contingencies and alternate modes of operation.<br>

The application was developed using a three layer architecture.

1. Application layer - Front-end
2. Middleware - Business Logic
3. Data layer - Data management

**Front-end UI - Client Package** <br>
The Front-end UI contains modular classes and components that enables the user to interact with the system. This includes logging into the system, interacting with the Map using filters and conditions, displaying a graph and a menubar for additional information.

**Business Logic - Server Package** <br>
The middleware contains classes responsible for loading data from the SQL Database in the backend and passing it the front-end Application using Spring Rest APIs. The server establishes the connection to the database, builds query based on the user inputs from the frontend, query the database and return the result to the user terminal.

**Data Package** <br>
The database holds all the necessary data, travel and demographic, to support the application. Queries will be processed based on the time of travel.

#### 2. System Requirements

As the application runs on a three-layer architecture, it requires the frontend and backend componenets to be up and running. The flow is that the backend database component is used by middleware which inturn is used by the frontend framework. So the process of intialising the components show start from database to middleware and then the frontend component.

**Client/Frontend Component**

- The frontend uses the react componenet.
- This requires the installation of node package manager (npm).

**Server/Middleware Component**

- The server component uses the spring framework.
- This requires the installation of maven to run the spring framework.
- A Java version 1.8 is required to be installed in the hosting server.

**Data/Backend Component**

- The data component uses MySQL data management tool.
- This requires the installation of MySQL server in the hosting server.
- The user name and password of the MySQL server should be root and password respectively.
- Once the MySQL server is set up, a database named react_spring should be created.
- The backend schema should follow the same table name and column names as mentioned in the below sample schema.

**Sample database schema**

- user:

| user_id | email_id | password                                                      |
| :-----: | :------: | ------------------------------------------------------------- |
|    7    | project7 | $2a$10\$vuDcy6bbNMpAVw3h1dLnVe2mXQVSuHp7IDC6z0PaysWWlUqz3zl06 |

- role:

| roleid | role  |
| :----: | :---: |
|   2    | ADMIN |

- user_role:

| user_id | roleid |
| :-----: | :----: |
|    7    |   2    |

- bus_from

|     lat     |     lng     | duration | distance |    city    |        date         | time |
| :---------: | :---------: | :------: | :------: | :--------: | :-----------------: | :--: |
| -41.2792895 | -41.2792895 |   3494   |  25057   | Wellington | 2018-11-28 00:00:00 | 0944 |

- demograph

|   area   | population |
| :------: | :--------: |
| Highbury |    3120    |

### 4. Operating Instructions <TO DO>

This section provides detailed, step-by-step system operating instructions. <br>

#### 4.1 Initiate Operation

This section contains procedures for system logon and system initialization to a known point, such as a system main menu screen. This initialization procedure should describe how to establish the required mode of operation and set any initial parameters required for operation. Software installation procedures should be included if the software is distributed on diskette and should be downloaded before each use. <br>

#### 4.2 Maintain Operation

This section defines procedures to maintain the operation of the software where user intervention is required. <br>

#### 4.3 Terminate and Restart Operations

This section defines procedures for normal and unscheduled termination of the system operations and should define how to restart the system.<br>

#### 5. Error Handling

This section addresses the possible error scenarios associated with the application and appropriate solutions to resolve the same. <br>

**Invalid user name or password** <br>

- Entering bad credentials on the login screen pops up this error message.
- The user is required to enter the correct credentials. <br>

**Error code 404 - API not found** <br>

- The system requires the backend Spring application to be up and running to support the frontend application.
- Failure to start the backend would result in this error.
- The solution is to start the server/spring application before starting the client/react componenet. <br>

**JDBC Communications link failure** <br>

- Failure to start the backend database results in this error.
- The user is required to start the backend MySQL server before starting the server/spring componenet of the application. <br>

**Unknown database react_spring** <br>

- The application uses a backend database named react_spring.
- Failure to create this database on the backend will result in this error.
- The user is expected to run the SQL scripts provided as part of the handover process or is expected to create the databsae react_spring manually in the backend MySQL data managemet tool. <br>
