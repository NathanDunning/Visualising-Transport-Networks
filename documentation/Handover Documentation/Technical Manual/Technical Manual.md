# Technical Manual

**Project 7:** Visualising our Transport Networks<br>
**Client:** Chris Vallyon<br>
**Date:** 11 October 2019<br>

<!-- This document is code documentation for our project. It can describe the code architecture and semantics of each package. It can include code snippets if needed to describe code behaviour. -->

## Overview <TO DO>

The Technical Manual provides documentation for developers to take on the project - Visualising Our Transport Networks.<br>

The application was developed using a three layer architecture.

- Application layer - Front-end built with `React.js`
- Middleware - Business Logic built with `Java Spring`
- Data layer - Data managed with an `SQL Database`

## SQL Database - Data Layer (Backend)

The SQL database is a core part of the application as it holds all necessary data; travel times, demographic information etc. to support the application. The main queries will be processed based on travel time.

- The data component uses MySQL data management tool.
- This requires the installation of MySQL server in the hosting server.
- The user name and password of the MySQL server should be root and password respectively.
- Once the MySQL server is set up, a database named react_spring should be created.
- The backend schema should follow the same table name and column names as mentioned in the below sample schema.

### Authentication/Application Security

This application communicates with the SQL Database to allow authentication.

**Invalid user name or password** <br>

- Entering bad credentials on the login screen pops up this error message.
- The user is required to enter the correct credentials. <br>

<!-- **Sample database schema**

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
| Highbury |    3120    | -->

## Server/Middleware Component

The middleware contains classes responsible for loading data from the SQL Database in the backend and passing it the front-end Application using Spring Rest APIs. The server establishes the connection to the database, builds query based on the user inputs from the frontend, query the database and return the result to the user terminal.

- The server component uses the spring framework.
- This requires the installation of maven to run the spring framework.
- A Java version 1.8 is required to be installed in the hosting server.

## React.js - Frontend Component

The frontend contains modular classes and components that enables the user to interact with the application. This includes logging in, interacting with the Map using filters and conditions, displaying a graph and a menubar for additional information.

- The frontend uses the react componenet.
- This requires the installation of node package manager (npm).

## Getting set up

This section provides detailed, step-by-step instructions on how to get started with development of this application. <br>

## React.js

With exception to data storage, the entire system is built as one single application using the current version of the React framework. Future development of this application will need take versioning into consideration as React.js is a frequently updated framework and some components/syntax may or may not be compatible with future versions of React.

This application currently uses React version: **16.9.0**

React is a very flexible library for buliding JavaScript web applications. The whole UI is divided into different components.

For documentation for React, see:
https://reactjs.org/docs/getting-started.html

### React Components <ADD MORE>

### React Component Lifecycle

Lifecycle methods are a set of functions called during different phases of the component lifecycle. The main React lifecycle method used in this project.

#### `ComponentDidMount()`

This method is called right after UI is first presented on the screen. All the Spring API calls and loading the data from the SQL Database is done in this method.

#### `ComponentWillMount()`

This is call before the UI is rendered so that data is fully loaded and will not cause the application to display and function incorrectly.

### `ComponentDidUpdate()`

This method is called when after the component updated. This is useful to derive the state from props if the props do not match the previous state.

### `ComponentWillUnMount()`

This is the last method called before the component unmounts and any subscriptions clean up.

### Material-UI

This application follows the by Material UI design guidelines created by Google. These guidelines provides helpful attributes that allow a consistent application layout. This also enables effective user experience. This is made possible by using the Material UI React components package. This holds a bunch of

For more information, see:
https://material-ui.com/.

### Deployment <ADD MORE>

## Possible Errors <ADD MORE>

**Error code 404 - API not found** <br>

- The project requires the backend Spring application to be up and running to support the frontend application.
- Failure to start the backend would result in this error.
- The solution is to start the server/spring application before starting the client/react componenet. <br>

**JDBC Communications link failure** <br>

- Failure to start the backend database results in this error.
- The user is required to start the backend MySQL server before starting the server/spring componenet of the application. <br>

**Unknown database react_spring** <br>

- The application uses a backend database named react_spring.
- Failure to create this database on the backend will result in this error.
- The user is expected to run the SQL scripts provided as part of the handover process or is expected to create the databsae react_spring manually in the backend MySQL data managemet tool. <br>
