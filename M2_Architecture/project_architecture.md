
# ENGR 301 Project *07* Architectural Design and Proof-of-Concept

**Authors:** Nathan Dunning, Lavanya Sajwan, Aatharsh Vijaya Sugumar, Doris Tam, Tsz Au

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2 (ISO/IEC/IEEE 42010:2011(E) clause 5.2)

#### Client

| Name                   | Organisation | Role            | Contact Details         |
| ----                   | ------------ | ----            | ---------------         |
| Chris Vallyon          | Beca         | Client          | chris.vallyon@beca.com<br>021 522 700 |

### 1.1 Purpose
The purpose of this system is to analyse different modes of transport (car, bus, train) and the current state of traffic flow on major city networks (Wellington, Christchurch and Auckland) in New Zealand to give insight for making transport-related decisions.

### 1.2 Scope
The Virtualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data.  The system should be able to run on any browser. It will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken against the distance from the origin. Users can add CSV data sets to the application in order to display the information. The goal is to deliver a web application which will display a terrain topographic map which shows how long it takes to get into the city from different sections of a region using different modes such as cars, trains and buses. Another aim is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of the display analysis and apply users to make insight-driven decisions made in the transport sector. The regions will, therefore, adapted to show census regions, rather than the set distance zones it currently is. This would make it more useful for consultants as decisions can be made dependent on different and specific socio-economic groups.

### 1.3 Changes to requirements

There are significant changes to the specific requirements within the User Interface and Software Interface.

For changes regarding the user interface, there will be extra graph functionality added; the graph can be used in conjunction with the animation, if selected by the user, and its axis will consist of average travel time in minutes to or from the city centre over time of day, which directly reflect the user's given parameter for animation length. This change has been added as the user has requested this feature be added to our system as this tool will further allow ease of analysis by identifying peaks and troughs.

For changes regarding the software interface, previous requirements stated that data would be stored as CSV files in different sub-directories on the user's local system. The change to this specific requirement is that the given data will no longer be stored in the user's local system but instead, stored in a remote database - as a result the system no longer has to read or parse the CSV files per each request from the user, instead, data will only need to be loaded once and the system will query the database for the specified data. There will be different tables in the database for the different given types data however, the format of the query string will stay the same - this way, the use of a parser will no longer be required to read the different data formats. The purpose of the software interface will now be to retrieve data by querying the database, process the data and diplay the data onto the user interface. This change has been made to the specifications as this will clearly set apart our system to having a front end and a back end - allowing for a clear breakdown of the structure of the system as well as packages, layers and processes that our system will use.

## 2. References

[1] Wikipedia, "Agile software development", wikipedia.com, Section 6 [22 November 2018] [Online] Available:
<br>https://en.wikipedia.org/wiki/Agile_software_development#Agile_software_development_practices [Accessed 26 March 2019] 

[2] Future plc, "Top 10 Software Development Risks",IT Pro Portal, Section 1 & 7 [2019] [online] Available:
<br>https://www.itproportal.com/2010/06/14/top-ten-software-development-risks/ [Accessed 27 March 2019] 

[3] Betterhealth, "Workplace safety - overuse injuries",Betterhealth.vic.gov.au, Para.1 [2019] [online] Availbale:
<br>https://www.betterhealth.vic.gov.au/health/healthyliving/workplace-safety-overuse-injuries [Accessed 27 March 2019]

[4] Wikipedia, "Geographic information system", wikipedia.com [12 Apr 2019] [Online] Available:
<br>https://en.wikipedia.org/w/index.php?title=Geographic_information_system&action=history [Accessed 26 March 2019]

[5] Heroku, "Heroku Security", heroku.com [2019] [Online] Available: https://www.heroku.com/policy/security [Accessed 16 May 2019].


[6] "42010-2011 - ISO/IEC/IEEE Systems and software engineering -- Architecture description - IEEE Standard", Ieeexplore.ieee.org, 2011. [Online]. Available: https://ieeexplore.ieee.org/document/6129467. [Accessed: 13- May- 2019].

[7] P. Kruchten, "The 4+1 View Model of architecture", IEEE Software, vol. 12, no. 6, pp. 42-50, 1995. Available: 10.1109/52.469759 [Accessed 9 May 2019].

## 3. Architecture

### 3.1 Stakeholders

See ISO/IEC/IEEE 42010 clause 5.3 and ISO/IEC/IEEE 12207 clause 6.4.4.3(2).

For most systems this will be about 2 pages, including a table mapping concerns to stakeholder.

|                 Skateholders of the program                  | Main Concerns                                                |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
|                        User (Public)                         | 1. The purposes of the system 2. The suitability of the architecture for achieving the system’s purposes. 6. The usability of the program |
|                Owners (Client: Chris Vallyon)                | 1. The purposes of the system 2. The suitability of the architecture for achieving the system’s purposes 3. The feasibility of constructing and deploying the system 4. The potential risks and impacts of the system to its stakeholders throughout its life cycle 5. Maintainability and evolvability of the system 6. The usability of the program |
| Suppliers (Data Suppliers: Chris Vallyon, Google and other data providers, Victoria University of Wellington) | 1. The purposes of the system, for the data providers the purposes of the usage of their data. |
|      Developers/Builders (Team members of the project)       | 1. The potential risks and impacts of the system to its stakeholders throughout its life cycle. 2. The feasibility of constructing and depolying the system. 3. The suitability of the architecture for achieving the system’s purposes. 6. The usability of the program |
|          Maintainers (Team members of the project)           | 4. The potential risks and impacts of the system to its stakeholders throughout its life cycle 5. Maintainability and evolvability of the system. |
| Operators (The employee of Beca who use the program, Client: Chris Vallyon ) | 1. The purposes of the system 2. The suitability of the architecture for achieving the system’s purposes 4. The potential risks and impacts of the system to its stakeholders throughout its life cycle |



### Main Concerns of Stakeholders:

1. The purposes of the system: 

   ​    The purpose of this system is to analyse the different modes and the current state of traffic flow of major cities in New Zealand to give insight for making transport-related decisions, users can add CSV data sets to the application in order to display the information. 



2. The suitability of the architecture for achieving the system’s purposes: 

   ​    The suitability of the architecture for achieving the system’s purposes is the amount of the suitable/useful work accomplished in the program. The suitable/useful work means the implementation of the program which satisfies the functionalities required by the client.



3. The feasibility of constructing and deploying the system:

   ​    The source code will be constructed using JavaScript with frameworks comprising of React together with Redux. The final product can be deployed to an office web server for multiple clients to use or ran through a localhost server for an individual.



4. The potential risks and impacts of the system to its stakeholders throughout its life cycle: 

   ​    a.  Failure to obtain data from a defined source

      ​    Failure to obtain data from defined source will cause application not functioning. The map needs enough data to display a terrain topographic map which shows how long it takes to get into the city(CBD) from different sections of a region using different modes such as cars, trains and buses.

   

   ​    b. Financial risks to obtain resources

   ​	Extra data requires financial support, the financial risk may lead to failure to obtain data to achieving the system’s purposes.

   

   ​    c. Loss of data or code due to workstation failure

   ​    Data loss can lead to additional expenses to purchase data, it also causes application not functioning because of a lack of data.

   

   ​    d. Functionalities not performing as expected

   ​    Functionalities not performing as expected will lead to delay or failure of deployment of the program.

   

   ​    e. Miscommunication within the team or with the client

   ​    Miscommunication within the team or with the client can lead to functionalities of the system not performing as expected and waste of funds support.

   

   ​    f. Members are ill at critical times in the project

   ​    Members are ill at critical times in the project will lead to delay or failure of deployment of the program.

   

   ​    g. Data Breach

   ​    If data breach from the inner of the team, the team member would be liable if the data breach results in a lawsuit.

   

5. The Maintainability and the  evolvability of the system:

   ​    Maintainability and evolvability of the system involves continuous improvement of the system which means the code needs to be well documented for the understanding of the team and the required data(CSV files) for the system should also be updatable as well as future handoff to client so they can build upon the application and understand how it works. 

   

6. The Usability of the program:    

   ​    The system should ensure ease of use to the end user. The layout of the system should be easy to perceive and components developed should carry necessary information required to guide the end user to attain the information he/she seeks from the system.




### 3.2 Architectural Viewpoints
The following section of architectural viewpoints are used to breakdown the structure of the system and analyse the different components which will be used [[6]](https://ieeexplore.ieee.org/document/6129467). The five viewpoints evaluated are Logical, Development, Process, Physical and Scenarios. It is essential to analyse the system this way as combined; they show multiple, concurrent views on the system and how they might affect functionality. Therefore, it provides a way to plan for any latency in our design.

The Logical Architecture viewpoint outlines the functionality that the system will provide to its users [[7]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). The main characteristics are displayed in a class diagram. This is necessary so the team can identify what is needed. Therefore the two stakeholders involved are; the team, and the client.

The Development Architecture viewpoint encompasses the system from the perspective of those involved in software development. In regards to the stakeholders; this is every team member. While the above viewpoint described the external requirements needed for the clients, this section provides an overview of the internal characteristics. Therefore, this section outlines the layers of the architecture and the critical components within it [[7]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). A package diagram supports this section to show the organisation of the different layers.

The Process Architecture viewpoint provides an overview of the behaviour of the end product. This supplies the stakeholders; the clients, and the team, with possible ineffectiveness that the system may encounter due to the connections between layers and interaction with users. The activity diagram displays different tasks that the system may undergo simultaneously, which can also affect functionality [[7]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf).

The Physical Architecture viewpoint focuses on mainly the non-functional requirements of the system such as availability, reliability, performance and scalability [[7]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf).  This is supported by the use of a deployment diagram to show the processing nodes and how they communicate. The main stakeholders that would be interested in this would be the team so that they have oversight on what nodes need to connect in order for the system to function.

The Scenario Architecture viewpoint provides functional scenarios which show how each combined previous viewpoints interact with each other in the system [[7]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). This section details the primary outcomes that users may take while using this software. Stakeholders interested in this are the clients and the team. Use case diagrams provide a visual overview of the wanted characterises to outline the desired architecture of the final software.

### 4. Architectural Views

### 4.1 Logical
...

### 4.2 Development

The application will be designed based on a simple three-tier architecture. Three-tier architecture provides modularity to the application by seperating presentation, application and the data layer. This provides flexibility to update a specific part of the application without affecting other parts. This added flexibility improves development life cycle time and also the reusability of the system, as one tier can be replaced or upgraded without affecting the other layers.

#### Package Diagram:

![image](https://drive.google.com/uc?export=view&id=1hn_FDjijMDbv3F2MUixF85v3JLzHLO7M)

##### Presentation Layer:
The presentation tier is the front end layer in the three-tier system and consists of the user interface and the presentation logic. The user interface is accessible through a web browser or web-based application which displays the content of the application to an end user. This tier will be built on React web technology and communicates with the application layer through REST API calls. Security of the application will be implemented by having a login page which will use spring security API at the backend.

##### Application Layer:
The application tier contains the functional business logic which drives the core capabilities of the application. It will be developed using Java and Spring REST APIs will be used to implement different application components. Application and Data layer Connectivity will be implemented using by JDBC. JDBC is a Java API used to connect to the database and execute queries. The retrieved data from the data layer will be processed and the information will be exposed as APIs to the front end. Spring security framework will be used to manage security of the application. 

##### Data Layer:
The data tier comprises of data access layer and database/data storage system. MySQL database management system will be used to maintain the data. Data is accessed by the application layer via JDBC. External services like Google Maps API will be invoked for data gathering. In-built security of MySQL will be used to maintain the security of the database. Data encryption should be used to maintain the privacy of user details especially the login credentials. The efficiency of the system directly depends on the size of the database. Query processing will be affected by the non-normalized tables with high content. For example, in this case the travel details about different modes of transport can be stored seperately and the appropriate tables can be queried for results, instead of having all the data under one table. 


### 4.3 Process

This section provides an overview of the system processes and communication between them; including any weaknesses.

The system has two main processes:
1. Web Application.
2. Data Storage
3. Business Logic

#### 4.3.1 Web Application
The first interaction that the user will have is with the web application. The user initiates this process by running the program by opening the webpage hosted by Heroku or another approved cloud hosting program. This front end that the user sees has a permanent connection to the databases containing the transport network data as well as a database of logins ids. The user will have to use their specific login details to enter the main application. If the incorrect login is shown, the user will be prompted again. Once accepted, the user will be granted access to the main map visuals. No other authentication is necessary to be provided.

The map will be displayed using data from the database. Data will also be able to be filtered here for users to make necessary consulting decisions.  

Performance is dependent on browser and hardware that the application is run on. There are also multiple errors on the back-end, which can cause errors as the layout is dependent on the data being fed to the front-end. Error messages would show up, but need to be resolved as soon as possible. For users, error messages should also involve minimal jargon.

Network latency can occur with bad and no internet connection as it will be hosted on a platform that requires internet access.

![Web Application](WebApplication.jpg)
The above-described process is shown in this activity diagram.

#### 4.3.2 Data Storage
Data from CSV files will be preloaded and stored in a database that will be synchronised to the web application via the business logic process. When a user interacts with the web application, requests are sent, and the databases are queried and return the information. This process is visually represented by the diagram below.

![Data Storage](Backend.jpg)

### 4.4 Physical 

##### A Deployment Diagram shows the physical architecture:

![image](https://drive.google.com/uc?export=view&id=1dlFQ_Tz5Pniqv2RAIHvoXe08lMXinQ9j)

​	The Deployment Diagram shows the relationships and connectivities between the software components and hardware components in the system and the physical distribution of the processing. The physical hardware are users, the browser in computers they are using to interact with the application and three servers(Web Server, Application Server, Database Server) connect each other in order to achieve the functionalities of the application. 

​	The Web Server supports/contains frontend of the software which is the presentation of the user interface, the user interface is supported by presentation logic and can be separated into two parts: Login page and Map visualization page after user login succeeds. 

​	The Application Server and Database Server supports/contains the backend of the software, they are responsible for Application Logic and Data Storage/Data Processing respectively. The Application server takes into account primarily in how different data are used to display the different state of traffic flow and the functionalities navigation bar. The Database Server takes charge of the storage of both census traffic data and user login data and the encryption/decryption of the data.

​	The user's computer is connected to the Web Server via HTTP through the Internet so the users can log in a webpage to access the application. Where the Web Server is connected to the Application Server by using the JDBC(Java Database Connectivity). And Database Server is connected to the Application Server via Spring REACT API.	



### 4.5 Scenarios
The overall system will be made up using two main sub-systems. The User Interface is an interactive map system, which is the connection between the user and the program. The user interface is the only way the user will be able to use the transporting program, it is essentially a graphical user interface which the user can use by changing parameters, clicking, and dragging across the screen. The returned information will be displayed either visually or textually to the user.

The Database Manager is the core of the system's back-end. It essentially works by using a model to build string queries - the models contains headers to all the tables in the database. In between the database manager and the user interface is a controller that is responsible for dealing with receiving URL queries and forwarding to the database manager. The database manager will then query the required database and return it's contents. If an error were to arise in the process of querying the database, the data manager is responsible for handling and processing the error so that it can still be returned in the correct format.

![Figure 4.5.1](https://drive.google.com/uc?export=view&id=1CuLdMzGoU5XzBZ8DDv6Y7e9jX_deiPRQ)
Figure 4.5.1

Figure 4.5.1 illustrates a scenario where the user would like to change the current city they are viewing.
1. The user would select the city they would like to view in the navbar on the user interface and press the 'go' button to execute the request.
2. Once the 'go' button is pressed, the user interface will set URI queries parameters based on the user given parameters.
3. The controller will then process URI parameters and pass them on to the database manager.
4. The database manager will build a query by using values from the database models. The models will contain headers where one of which, will correspond to the city requested by the user.
5. The database manager will execute the query and return data back to the controller.
6. The controller will format the data in a form that will be readable by the user interface and return it.
7. The user interface will display the data given by the controller.


![Figure 4.5.2](https://drive.google.com/uc?export=view&id=1Ak3Z9sMWwIjqkyxkq7cn2S8L0ukClKr3)
Figure 4.5.2

Figure 4.5.2 illustrates a scenario where the user would like to change the navigate the map to view a new area within the same city.
1. The user will use either arrow key inputs or mouse inputs to drag across the screen on the user interface - indicating they would like to pan across the map.
2. The user interface will set URI queries parameters according to user inputs.
3. The controller will process URI query parameters, database parameters will be a null value hence, the controller will instruct the user interface to update display.
4. The user interface will update the display and icons to offset the distance moved given by the user inputs.

Comparing the two core use cases given above, use case displayed in Figure 4.5.1 requires more processes and layers to execute as to figure 4.5.2. This can not only be seen directly through the steps taken to execute each use case but also the interaction between other sub-systems. Use case described in Figure 4.5.2 only needs to allocate resources for the controller to return data given from the URI queries back the user interface, the majority of resources allocated such as threads and cores will be allocated for the user interface as this is where the processing will occur. Use case described in Figure 4.5.1 on the other hand requires more classes and packages to execute hence, the system will need to allocate more resources the controller and data manager. In order for the data manager to successfully retrieve data from databases back to the controller, it will need to use many more packages from both the application layer and data layers.

## 5. Development Schedule
The schedule and number of sprints for MVP1 has been changed from the requirements documents to incorporate the number of issues identified during MVP planning. Initial estimate of budget from project requiremets has been reduced as client has agreed to get the data.

Key dates for project deliverables:
1. Architectural prototype - 17 May, 2019
1. Minimum viable product - 7 June, 2019
1. Further releases:
    1. Release 1.1 - 8 August, 2019
    2. Relaese 1.2 - 9 September, 2019
    3. Release 1.3 - 11 October, 2019

The initial phase of the project will focus on architecture and design. Data sources will be identified, and the product architecture will be finalised during this phase.

Agile development methodology [1] will be followed for product development. Entire product life-cycle is split into four MVPs (Minimum Viable Product). Each MVP consists of two sprints, apart from MVP1 and each sprint will run for two weeks. During the start of each sprint, potential tasks will be identified and will be equally distributed to team members. The tasks will be updated on the Gitlab repository and there should be a continuous update on the progress of each task so that every team member is aware of the deliverable for that sprint. If some tasks are not completed (worst case), they will be pushed to the next sprint. Each sprint will have a  board on the Gitlab, and the tasks for that sprint will be updated on the corresponding board.  

There will be two stand-up sessions each week during the lab hours to discuss the status of each task. Each task will have a completion date, and the track for completion of each task will be updated during the stand-up.

The demo of each MVP will be showcased to the client, and feedback will be taken into account during the planning of the next MVP. The last MVP will have a close off sprint, during which all the backlogs will be considered for completion.

#### Architecture Design Phase - 1 April to 5 May  
#### MVP - 8 Apr to 11 October
1. MVP1 (8 Apr to 9 June)
    1. Sprint1 - 8 Apr to 28 Apr
    2. Sprint2 - 29 Apr to 12 May
    3. Sprint3 - 13 May to 26 May
    4. Sprint4 - 27 May to 9 June

#### 3. Further Releas
2. MVP2 (8 July to 8 August)
    1. Sprint1 - 8 July to 20 July
    2. Sprint2 - 21 July to 8 August


3. MVP3 (9 August to 9 September)
    1. Sprint1 - 9 August to 21 August
    2. Sprint2 - 22 August to 9 September


4. End-Product - 11 October
    1. Sprint1 - 10 September to 23 September
    2. Sprint2 - 24 September to 11 October (close-off sprint)

### 5.2 Budget and Procurement
#### 5.2.1 Budget
| Budget Item                                           | Budget     |
| ----------------------------------------------------- |:----------:|
| Obtain required data from different sources           | 200        |
| Hosting platform                                      | 100        |
| Database Server                                       | 50         |

The application uses data to analyse the traffic volume within the city along with demographic data. Data from these sources have to be combined for analysing and processing. The efficiency of the application depends upon the quality of the data. So it is essential to obtain data from trusted sources and have plenty of it to support the use cases. These sources may include google API for travel data, onzo data, taxi-data, telco and census data for demographic information. Sourcing one month of travel data from Google API costs around 1500 dollars approx. Even though the client has agreed to get the data, a considerable amount would be required for any unplanned data sourcing, platform hosting and database server. 
* Google Distance Matrix API for travel time and distance, costs 10$/1000 API hits. The budget has been estimated for 20,000 Distance Matrix API hits for gathering travel data. 
* For hosting the application, a linux basic-tier Azure virtual machine with 1-core costs 18$/month. Apart from the 200 dollar credit provided by azure, a 100 dollar budget has been estimated to host the application in Azure cloud. 
* For hosting a database server, heroku provides hobby-basic plan of 9$/month. It provides an expected uptime of 99.5% with a support of upto 20 connections and a data limit of 10 million rows.

Considering the time and the agreement related issues, a data source can be finalised and development can start on the obtained data. The product can be modified further to analyse data from different sources. 

#### 5.2.2 Procurement
| Procurement Item                                      | Source            |
|:-----------------------------------------------------:|:-----------------:|
| Travel Data                                           | Google Maps API   |
| Demographic Data                                      | Census Data       |
| GIS Tool (open source)                                | QGIS              |
| Database server                                       | Heroku            |
| Spring Libraries (open source)                        | mvnrepository     |

The application maps travel data to estimate the time taken to reach the destination (Wellington CBD in this case) from different regions of Wellington. The time estimate is calculated for different modes of transport like private (car) and public (bus). Google Maps API will be used to gather data and analysis will be done on top of this data.  

Demographic data from Census 2013 will be used to map the population metrics with different regions of Wellington. This will be combined with travel data to identify the regions and the percentage of population that would reach the destination within a specific time frame. 

GIS applications are tools that are used to create interactive queries, analyze spatial information, edit data in maps, and present the results of all these operations [4]. Demographic data will be overlaid on the geographic information and analysis will be done using the GIS tool.

Online database server can be used to maintain a single replica of data that supports the development process. There are many online MySQL database service providers including Azure MySQL database server and Google SQL Cloud. But heroku provides an excellent support with a sufficient uptime (99.5%) at affordable cost. Heroku platform is designed to protect customers from threats by applying security controls at every layer from physical to application, isolating customer applications and data, and with its ability to rapidly deploy security updates without customer interaction or service interruption [5]. This service can be utilised for hosting MySQL database.

Maven central repository is an open source repository provided by Maven community. It contains a large number of commonly used libraries. All the necessary spring-based dependencies required for product development is available for download from maven repository.


### 5.3 Risks

Risks in software development is a potential problem which prevents an individual or a group of people from reaching the project goal [2]. The outcome of these is the possibility of suffering loss, and total risk exposure to a specific project will account for both the probability and the size of the potential loss. 

| Risks                                                 | Likelihood |   Severity  |
| ----------------------------------------------------- |:----------:|:-----------:|
| Resources are ill at critical times in the project    | Low        |    Severe   |
| Changes in project requirements                       | Low        |    Severe   |
| Failure to obtain data from defined sources           | Moderate   |    Critical |
| Failure to integrate critical components (backend and frontend)           | Moderate   |    Critical |
| Miscommunication within the team or with the client   | Moderate   |    Moderate |
| Underestimation of development life cycle             | Low        |    Critical |
| Financial risks to obtain resources                   | Moderate   |    High     |
| Failure to arrive at proper budget estimation         | Low        |    High     |
| Loss of data or code due to workstation failure       | Moderate   |    High     |
| Gold plating - Decoration before functionalities      | Low        |    Low      |
| Functionalities not performing as expected            | Moderate   |    High     |

Most software development projects are inherently risky because of the variety of problems that may arise [3]. The severity of certain risks can be mitigated with prior planning and taking necessary precautions.  

| Risks                                                 | Mitigation  |
| ----------------------------------------------------- |:-----------|
| Members are ill at critical times in the project      | Provide knowledge transfer so that everyone is capable of doing a particular task. Documentation is required to understand the functionalities of the application.|
| Changes in project requirements                       | Sprint planning should include the feedbacks from the previous sprint and requirement changes, if any.  |
| Failure to obtain data from defined sources           | Find open source data that applies to the project and use it if there is any discrepancy in obtaining original data from the client. |
| Failure to integrate critical components (backend and frontend)           | Development of backend and frontend should happen in parallel and each sprint should have a workable product. Integration should happen in each sprint to eliminate the risk of integration issues at the time of delivery. |
| Miscommunication within the team or with the client   | Clarify understanding with the team member or with the client until it is clear. Use client meetings and team stand-ups effectively. |
| Underestimation of development life cycle             | Invest more time on planning and the design phase. Proper use of git to manage the milestones.  |
| Financial risks to obtain resources                   | Proper planning of the resources with the available budget. Contact the coordinator in case of budget issues.     |
| Failure to arrive at proper budget estimation         | Estimate the budget according to the required resources.        |
| Loss of data or code due to workstation failure       | Frequent commits to the git repository with appropriate commit messages.     |
| Gold plating - Decoration before functionalities      | Prioritize the completion of functionalities. Gold plating is required at some level, but only after developing the working product.         |
| Functionalities are not performing as expected            | Write unit test cases and perform functionality tests after completion of each function. Perform integration tests once completing all the necessary functionalities.          |


### 5.4 Health and Safety

| Risks                                                 | Likelihood |   Severity  |
| ----------------------------------------------------- |:----------:|:-----------:|
| Occupational overuse syndrome                         | Moderate   |    Low      |
| Earthquake in the lab                                 | Low        |    High     |
| Injury while attending a meeting at client office     | Low        |    High     |
| Mental stress because of the workload                 | Moderate   |    Low      |
| Eye strain from computer use                          | Low        |    Low        |
| Fire in the lab                                       | Low        |    Severe   |


| Risks                                                 | Mitigation  |
| ----------------------------------------------------- |:-----------|
| Occupational overuse syndrome                                 | Mix tasks to avoid long, uninterrupted stretches of using the computer. Remove hands from keyboard and mouse when not actively using them. |
| Earthquake in the lab                                         | Drop, cover and hold until shaking stops. Listen carefully to the earthquake-related announcements and evacuation staff.  |
| Injury while attending a meeting at client office             | Be aware if the client office is in the earthquake prone zone. Take safety precautions and attend safety related inductions at the client office.  |
| Mental stress because of the workload                         | Establish boundaries and take time to relax. Talk to team members or the coordinator in case of work overload.   |
| Eye strain from computer use                                  | Maintain a reasonable distance from the monitor. Mix tasks to avoid long, uninterrupted stretches of using the computer.           |
| Fire in the lab                                               | Listen to the fire-related announcements and read the signs. Pull the nearest fire alarm while exiting the building.  


#### 5.4.1 Safety Plans

Project requirements do not involve the risk of death, serious harm, or any minor injuries.

---

## 6. Appendices

### 6.1 Assumptions and dependencies

#### 6.1.1 Assumptions

- The primary users of this application will be members of Beca in order to consult local, regional agencies and councils as well as other decision makers who will impact the public transport in New Zealand.


- The users do not need coding to use the application. Therefore they are not expected to have technical background nor have experienced using a similar system and understanding of any programming terminologies.


- The users do not need a large amount of extra learning to use the application. A short, less than an hour tutorial would be sufficient for new users to understand how to use the application.


- A log-in functionality would be a useful addition to the application but is not considered a necessity since the users will have the same permissions when using the application and there is no need of functionality that allows users to save and load decisions on the application.


- The application should be user-friendly. Users should interact with the application intuitively which means by merely moving and clicking buttons on the front-end interface with the mouse or keyboard to achieve the functions and view the results. A "Help" tool should be added.


- The application should be run and work on Internet Explorer 11 and does not need an Internet connection to run. Functionality can be added to other browsers.


- More data datasets are needed to make necessary decisions from the tool, to extend this application's functionality. These can include New Zealand Transport Data (.csv files), Google Transport Data (.txt and .dat files) Telco, Onzo and census data for demographic information.


- Extra data (most likely from Google) requires financial support.


- The time needed for the client to retrieve the additional data is unpredictable. Because the efficiency of the application depends upon the quality of the data, lack of data limits the effectiveness of the minimum viable product.


- The application should react within a relatively quick response time; 90% of the responses should within range of 10 seconds, so the user does not become uninterested in the application.


- The application should be able to support no more than simultaneous ten users at a time. 


- The transport data will be load manually and time depends on the amount of data, the goal is 95% of every load should occur within 5 minutes.


- The database should have all the necessary data to support the application. Queries should be processed based on the chosen mode of transport, time of travel, lat-long details and other filters. Data for the different modes of transport should be stored separately to avoid latency.


- Prior planning and taking necessary precautions should be made to mitigate the severity of certain risks.

#### 6.1.2 Dependencies

- The access of the application requires users to log in with a validated account.


- The efficiency and accuracy of the application depend upon the quality and amount of the data.


- The application response time depends on the amount of data and the processing of the data in the API backend interface.


- The financial and additional data are required, there is a dependency on support from third party, most likely course coordinator and Beca.


- The transport and demographic data will be load manually and time depends on the amount of data. 


- The application needs to run on a browser.


- Mouse and keyboard inputs are required for the navigation of the map and parameters settings.


- Query from the users requires the server to establishes a connection to the database, and return the result to the user terminal.

### 6.2 Acronyms and abbreviations

| **Acronym/Abbreviation** | **Definition**                                                   |
| ------------------------ | ------------------------------------------------------------ |
| GIS                      | Geographic Information System, a system for storing and manipulating geographical information on computer. |
| MVP                      | Minimum Viable Product, is a product with just enough features to satisfy early clients/customers, and to provide feedback for future product development. |
| CBD                      | Central Business District, the main business and commercial area of a town or city. |
| API                      | Application Program Interface, a set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service. |
| Demo                     | Demonstration, a demonstration of a product or technique     |
| Lab                      | Laboratory.                                                  |
| App                      | Application, especially as downloaded by a user to a mobile device. |
| CSS*                     | Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. |
| CSV*                     | Comma-Separated Values files, delimited text file that uses a comma to separate values.(The transport data files are formatted to CVS the program is using). |
|.txt                      | .txt is a text file used by text editors |
|.dat                      | .dat is a generic data file which store specific information related to an application |
| JDBC                      | Java Database Connectivity is an API service provided by java to connect to the MySQL data server. |
| REST                      | Representational State Transfer is an architecture provided by Spring to send and receive data between server and client. |
## 7. Contributions

| **Name**                | **Contributions** |
| ----------------------- | ----------------- |
| Aatharsh Vijaya Sugumar | 4.2, 5, 6 |
| Doris Tam               | 1.1, 1.2, 4.1 |
| Lavanya Sajwan          | 1.1, 1.2, 3.2, 4.3 |
| Nathan Dunning          | 1.3, 4.5 |
| Tsz Kin Au              | 3.1, 4.4 |

---

