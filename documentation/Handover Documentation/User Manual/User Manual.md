# User Manual

**Project _7_:** Visualising our Transport Networks<br>
**Client:** Chris Vallyon<br>
**Date:** 11 October 2019<br>

### 1. Introduction <TO DO>

The User Manual contains all essential information for the user to make full use of the project - Visualising Transport Networks, developed as part of the coursework of ENGR 301 and ENGR 302. This manual includes a description of the system functions and capabilities, contingencies and alternate modes of operation, and step-by-step procedures for system access and use. <br>

#### 1.1	Purpose and Scope
This section provides a description of the purpose and scope of the User Manual. <br>

#### 1.2	Organization
This section describes the organization of the User Manual. <br>

#### 1.3	Points of Contact
This section identifies the organization codes and staff (and alternates if appropriate) who may assist the system user.  If a help desk facility or telephone assistance organization exists, describe it in this section. <br>

#### 1.4	Project References
This section provides a bibliography of key project references and deliverables that have been produced prior to this point in the system development process. <br>

#### 1.5	Primary Business Functions
This section discusses the business perspective of the user’s primary’ responsibilities and tasks as they are supported by the system.  Introduce the business functions so that the focus may rest on the systematic steps to support the business functions in later sections. <br>

#### 1.6	Glossary
This section provides a glossary of all terms and abbreviations used in the manual.  If the glossary is several pages or more in length, it may he placed as an appendix. <br>


### 2.	System Capabilities and Requirements
This section provides a brief overview of the system, its capabilities and its requirements. <br>

#### 2.1	Purpose
The application, Visualising our Transport Network, is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data. The system developed will be able to run on any browser. The system displays an observation on how long it takes to get to the destination - Wellington CBD from different suburbs on the map, where the zones are coloured based on the time taken to reach the destination. Another major feature of the application is combining demographic information with different travel points which further increases the effectiveness of the display analysis and allow users to make insight-driven decisions based on the visual information. <br>

#### 2.2	General Description
The application was developed using a three layer architecture. 
1. Application layer - Front-end
2. Middleware - Business Logic
3. Data layer - Data management

**Front-end UI - Client Package**  <br>
The Front-end UI contains modular classes and components that enables the user to interact with the system. This includes logging into the system, interacting with the Map using filters and conditions, displaying a graph and a menubar for additional information.

**Business Logic - Server Package**  <br>
The middleware contains classes responsible for loading data from the SQL Database in the backend and passing it the front-end Application using Spring Rest APIs. The server establishes the connection to the database, builds query based on the user inputs from the frontend, query the database and return the result to the user terminal.

**Data Package** <br>
The database holds all the necessary data, travel and demographic, to support the application. Queries will be processed based on the time of travel.

#### 2.3	System Requirements
As the application runs on a three layer architecture, it requires the frontend and backend componenets to be up and running. The flow is that the backend database component is used by middleware which inturn is used by the frontend framework. So the process of intialising the components show start from database to middleware and then the frontend component.

**Client/Frontend Component**
* The frontend uses the react componenet.
* This requires the installation of node package manager (npm).

**Server/Middleware Component**
* The server component uses the spring framework.
* This requires the installation of maven to run the spring framework.
* A Java version 1.8 is required to be installed in the hosting server.

**Data/Backend Component**
* The data component uses MySQL data management tool.
* This requires the installation of MySQL server in the hosting server.
* The user name and password of the MySQL server should be root and password respectively.
* Once the MySQL server is set up, a database named react_spring should be created.
* The backend schema should follow the same table name and column names as mentioned in the below sample schema.

**Sample database schema**
* user:

| user_id   | email_id      | password                                                     |
|:---------:|:-------------:|--------------------------------------------------------------|
|       7   | project7        | $2a$10$vuDcy6bbNMpAVw3h1dLnVe2mXQVSuHp7IDC6z0PaysWWlUqz3zl06 |

* role:

| roleid    | role		    |
|:--------: |:-------------:|
|       2   | ADMIN	        |

* user_role:

| user_id   | roleid	|
|:--------: |:---------:|
|       7   | 2		|

* bus_from

| lat         | lng         | duration | distance | city       | date        | time    |
|:-----------:|:-----------:|:--------:|:--------:|:---------: |:----------------:|:----------------:|
 |-41.2792895 | -41.2792895 |     3494 |    25057 | Wellington | 2018-11-28 00:00:00 | 0944  | 
 

* demograph

| area         | population   |
|:-----------:|:-----------:|
 |Highbury  | 3120  |



### 3.	Description of System Functions
This sections provides an overview of the different functionalities implemented as a part of developing the application.

#### 3.1	User Login 
**Description** <br>
Secure usage of the web application was one of the initial requirement of this project. As a part of this requirement, a login feature was developed and integrated, which prompts the user for appropriate username and password. On entering credentials and once authenticated, the user will be able to access the application. An error popup will be displayed if the credentials does not match with the user information on the backend database. <br>

**Function Inputs**
* Text field for user name
* Text field for user password
* A button to authenticate the credentials

**Function Output**
* Correct credentials - users logs in to the application.
* Wrong credentials - user is prompted with a error popup.


#### 3.2	Demographic Information 
**Description** <br>
Combining the demographic information with the travel points was another requirement of this project. As a part of this requirement, an information tool was developed to display the population information for the corresponding suburb region. User, on hovering over different regions on map, will be able to see the demographic details associated with that specific region. <br>

**Function Inputs** 
* Mouse - Hover over different suburb regions on map.

**Function Output** 
* Information tool on map displays demographic information.

#### 3.3 Transport heat map:
**Description** <br>
Visualising the travel time from different regions of the map to the destination - Wellington CBD, is one of the major feature implemented as a part of this application. The Map is seggregated into different regions based on the geographic boundaries of the wellington suburbs. A navigation bar is developed which allows user to query the database based on different time intervals. Based on the user input, the regions are coloured and the user can visualise the traffic congestions of different regions over different time intervals. A legend is added to the bottom left-corner of the map to display the time intervals associated with different colours.<br>

**Function Inputs** 
* Dropdowns to select the city, date, from time and to time on the navigation bar.
* A button to start the visualisation on the map.
* A button to reset the map to it's initial state.

**Function Output** 
* Regions on the map are coloured based on the travel time.


### 4.	Operating Instructions <TO DO>
This section provides detailed, step-by-step system operating instructions. <br>

#### 4.1	Initiate Operation
This section contains procedures for system logon and system initialization to a known point, such as a system main menu screen.  This initialization procedure should describe how to establish the required mode of operation and set any initial parameters required for operation. Software installation procedures should be included if the software is distributed on diskette and should be downloaded before each use. <br>

#### 4.2	Maintain Operation
This section defines procedures to maintain the operation of the software where user intervention is required. <br>

#### 4.3	Terminate and Restart Operations
This section defines procedures for normal and unscheduled termination of the system operations and should define how to restart the system.<br>

#### 5.	Error Handling
This section addresses the possible error scenarios associated with the application and appropriate solutions to resolve the same. <br>

**Invalid user name or password** <br>
* Entering bad credentials on the login screen pops up this error message. 
* The user is required to enter the correct credentials. <br>

**Error code 404 - API not found** <br>
* The system requires the backend Spring application to be up and running to support the frontend application. 
* Failure to start the backend would result in this error. 
* The solution is to start the server/spring application before starting the client/react componenet. <br>

**JDBC Communications link failure** <br>
* Failure to start the backend database results in this error. 
* The user is required to start the backend MySQL server before starting the server/spring componenet of the application. <br>

**Unknown database react_spring** <br>
* The application uses a backend database named react_spring. 
* Failure to create this database on the backend will result in this error. 
* The user is expected to run the SQL scripts provided as part of the handover process or is expected to create the databsae react_spring manually in the backend MySQL data managemet tool. <br>

