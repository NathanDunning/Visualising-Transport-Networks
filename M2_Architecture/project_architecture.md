# ENGR 301 Assignment 2: Architectural Design and Proof-of-Concept

## Proof-of-Concept

The aim of an architectural proof-of-concept (spike or walking skeleton) is to demonstrate the technical feasibility of your chosen architecture, to mitigate technical and project risks, and to plan and validate your technical and team processes (e.g build systems, story breakdown, Kanban boards, acceptance testing, deployment).

A walking skeleton is an initial technical attempt that will form the architectural foundation of your product. Since a walking skeleton is expected to be carried into your product, it must be completed to the quality standards expected for your final product. A walking skeleton should demonstrate all the technologies your program will rely on "end-to-end" &mdash; from the user interface down to the hardware.

In the context of ENGR 301, a walking skeleton does not need to deliver any business value to  project: the aim is technical validation and risk mitigation.


## Document

The aim of the architectural design document is to describe the architecture and high-level design of the system your group is to build, to identify any critical technical issues with your design, and to explain how you have addressed the highest rated technical and architectural risks. The architecture document should also demonstrate your understanding of architectural techniques and architectural quality, using tools and associated notations as necessary to communicate the architecture precisely, unambiguously and clearly in a written technical document.

Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure that you focus your efforts on those architectural concerns that are most important to completing a successful system: if sections are at their page limit, indicate how many would items be expected in a complete specification.

The ENGR 301 project proposal and requirements document should be based on the standard ISO/IEC/IEEE 42010:2011(E) _Systems and software engineering &mdash; Architecture description_, plus appropriate sections from ISO/IEC/IEEE 29148:2018(E) _Systems and software engineering &mdash; Life cycle processes &mdash; Requirements engineering_; ISO/IEC/IEEE 15289:2017 _Systems and software engineering &mdash; Content of life-cycle information items (documentation)_; ISO/IEC/IEEE 15288:2015 _Systems and software engineering &mdash; System life-cycle processes_; ISO/IEC/IEEE 12207:2017 _Systems and software engineering &mdash; Software life cycle processes_ and ISO 25010 SQuaRE; with notations from ISO/ISE 19501 (UML). In particular, Annex F of ISO/IEC/IEEE 15288 and Annex F of ISO/IEC/IEEE 12207. These standards are available through the Victoria University Library subscription to the [IEEE Xplore Digital Library](https://ieeexplore.ieee.org/) (e.g. by visiting IEEE Xplore from a computer connected to the University network).

The document should contain the sections listed below, and conform to the formatting rules listed at the end of this brief.

All team members are expected to contribute equally to the document and list their contributions in the last section of the document. You should work on your document in your team's GitLab repository in a directory called "M2_Architecture". If more than one team member has contributed to a particular commit, all those team member IDs should be included in the first line of the git commit message. ``git blame``, ``git diff``, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually, commit early and commit often. Any team wishing to separate individually contributed sections into a single file before collation into the single proposal document for submission is welcome to do so.


---

# ENGR 301 Project *NN* Architectural Design and Proof-of-Concept

**Authors:** Nathan Dunning, Lavanya Sajwan, Aatharsh Vijaya Sugumar, Doris Tam, Tsz Au

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2 (ISO/IEC/IEEE 42010:2011(E) clause 5.2)

### Client

Identify the client and their contact details.

### 1.1 Purpose

One sentence describing the purpose of the system.

### 1.2 Scope

One paragraph describing the scope of the system.

### 1.3 Changes to requirements

If the requirement have changed significantly since the requirements document, outline the changes here. Changes must be justified and supported by evidence, i.e. they must be substantiated.
(max one page, only if required)

## 2. References

[1] Wikipedia, "Agile software development", wikipedia.com, Section 6 [22 November 2018] [Online] Available:
<br>https://en.wikipedia.org/wiki/Agile_software_development#Agile_software_development_practices [Accessed 26 March 2019] 

[2] Future plc, "Top 10 Software Development Risks",IT Pro Portal, Section 1 & 7 [2019] [online] Available:
<br>https://www.itproportal.com/2010/06/14/top-ten-software-development-risks/ [Accessed 27 March 2019] 

[3] Betterhealth, "Workplace safety - overuse injuries",Betterhealth.vic.gov.au, Para.1 [2019] [online] Availbale:
<br>https://www.betterhealth.vic.gov.au/health/healthyliving/workplace-safety-overuse-injuries [Accessed 27 March 2019]

[4] Wikipedia, "Geographic information system", wikipedia.com [12 Apr 2019] [Online] Available:
<br>https://en.wikipedia.org/w/index.php?title=Geographic_information_system&action=history [Accessed 26 March 2019]


## 3. Architecture

Describe your system's architecture according to ISO/IEC/IEEE 42010:2011(E), ISO/IEC/IEEE 12207, ISO/IEC/IEEE 15289 and ISO/IEC/IEEE 15288.

Note in particular the note to clause 5 of 42010:

_"The verb include when used in Clause 5 indicates that either the information is present in the architecture description or reference to that information is provided therein."_

This means should refer to information (e.g. risks, requirements, models) in this or other documents rather than repeat information.

### 3.1 Stakeholders

See ISO/IEC/IEEE 42010 clause 5.3 and ISO/IEC/IEEE 12207 clause 6.4.4.3(2).

For most systems this will be about 2 pages, including a table mapping concerns to stakeholder.

### 3.2 Architectural Viewpoints
(1 page, 42010 5.4)

Identify the architectural viewpoints you will use to present your system's architecture. Write one sentence to outline each viewpoint. Show which viewpoint frames which architectural concern.

### 4. Architectural Views

(5 sub-sections of 2 pages each sub-section, per 42010, 5.5, 5.6, with reference to Annex F of both 12207 and 15288)

Describe your system's architecture in a series of architectural views, each view corresponding to one viewpoint.

You should include views from the following viewpoints (from Kruchten's 4+1 model):

 * Logical
 * Development
 * Process
 * Physical
 * Scenarios - present scenarios illustrating how two of your most important use cases are supported by your architecture

As appropriate you should include the following viewpoints:

 * Circuit Architecture
 * Hardware Architecture

Each architectural view should include at least one architectural model. If architectural models are shared across views, refer back to the first occurrence of that model in your document, rather than including a separate section for the architectural models.

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
The data tier comprises of data access layer and database/data storage system. MySQL database management system will be used to maintain the data. Data is accessed by the application layer via JDBC. External services like Google Maps API will be invoked for data gathering. In-built security of MySQL will be used to maintain the security of the database. Data encryption should be used to maintain the privacy of user details especially the login credentials. The efficiency of the system directly depends on the size of the database. Query processing will be affected by the non-normalized tables with high content. For ex, in this case the travel details about different modes of transport can be stored seperately and the appropriate tables can be queried for results, instead of having all the data under one table. 


### 4.3 Process
...

### 4.4 Physical
...

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

Comparing the two core use cases given above, use case displayed in Figure 4.5.1 requires more processes and layers to execute as to figure 4.5.2. This can not only be seen directly through the steps taken to execute each use case as each step taken requires the system to allocate more resources to process but also the interaction between other sub-systems.
Use case described in Figure 4.5.2 only needs to allocate resources for the controller to return data given from the URI queries back the user interface, the majority of resources allocated such as threads and cores will be allocated for the user interface as this is where the processing will occur. Use case described in Figure 4.5.1 on the other hand requires more classes and packages to execute hence, the system will need to allocate more resources the controller and data manager; starting at step (1) the system will only be required to allocate resource to use packages from the presentation layer, after step (3) and (5) has been executed the system is now allocating resource towards the processing and retrieval of data and both the application and data layers are being used.

## 5. Development Schedule
The schedule and number of sprints for MVP1 has been changed from the requirements documents to incorporate the number of issues identified during MVP planning. Initial estimate of budget from project requiremets has been reduced as client has agreed to get the data.

Key dates for project deliverables:
1. Architectural prototype - 16 May, 2019
1. Minimum viable product - 7 June, 2019
1. Further releases:
    1. Release 1.1 - 8 August, 2019
    2. Relaese 1.2 - 9 September, 2019
    3. Release 1.3 - 11 October, 2019

The initial phase of the project will focus on architecture and design. Data sources will be identified, and the product architecture will be finalised during this phase.

Agile development methodology [1] will be followed for product development. Entire product cycle is split into four MVPs (Minimum Viable Product). Each MVP consists of two sprints, apart from MVP1 and each sprint will run for two weeks. During the start of each sprint, potential tasks will be identified and will be equally distributed to team members. The tasks will be updated on the Gitlab repository and there should be a continuous update on the progress of each task so that every team member is aware of the deliverable for that sprint. If some tasks are not completed (worst case), they will be pushed to the next sprint. Each sprint will have a  board on the Gitlab, and the tasks for that sprint will be updated on the corresponding board.  

There will be two stand-up sessions each week during the lab hours to discuss the status of each task. Each task will have a completion date, and the track for completion of each task will be updated during the stand-up.

The demo for each MVP will be showcased to the client, and feedback will be taken into account during the planning of the next MVP. The last MVP will have a close off sprint, during which all the backlogs will be considered for completion.

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


4. MVP4 (10 September to 11 October)
    1. Sprint1 - 10 September to 23 September
    2. Sprint2 - 24 September to 11 October (close-off sprint)

### 5.2 Budget and Procurement
#### 5.2.1 Budget
| Budget Item                                           | Budget     |
| ----------------------------------------------------- |:----------:|
| Obtain required data from different sources           | 200       |

The application uses data to analyse the traffic volume within the city along with demographic data. Data from these sources has to be combined for analysing and processing. The efficiency of the application depends upon the quality of the data. So it is essential to obtain data from trusted sources and have plenty of it to support the use cases. These sources may include google API for travel data, onzo, taxi-data, telco and census data for demographic information. Sourcing one month of travel data from Google API costs around 1500 dollars approx. Eventhough client has agreed to get the data, a considerable amount would be required for any unplanned data sourcing. Google Distance Matrix API for travel time and distance, costs 10 dollars per 1000 API hits. Budget has been estimated for 20,000 Distance Matrix API hits for gathering travel data. Considering the time and the agreement related issues, a data source can be finalised and development can start on the obtained data. The product can be modified further to analyse data from different sources. 

#### 5.2.2 Procurement
| Procurement Item                                      | Source            |
| ----------------------------------------------------- |:-----------------:|
| Travel Data                                           | Google Maps API   |
| Demographic Data                                      | Census Data       |
| GIS Tool (open source)                                | QGIS              |

Application maps travel data to estimate the time taken to reach a particular point in map (wellington CBD in this case) from different regions of wellington. The time estimate is calculated for different modes of transport like private (car) and public (bus). Google Maps API will be used to gather data and analysis will be done on top of this data.  

Demographic data from Census 2013 will be used to map the population metrics with different regions of wellington. This will be combined with travel data to identify regions and the percentage of population that would reach the destination within a specific time frame. 

GIS applications are tools that are used to create interactive queries, analyze spatial information, edit data in maps, and present the results of all these operations [4]. Demographic data will be overlaid on the geographic information and analysis will be done using the GIS tool.

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

one page on assumptions and dependencies (9.5.7)

### 6.2 Acronyms and abbreviations

one page glossary as required

## 7. Contributions

A one page statement of contributions that lists each member of the group and what they contributed to this document.

---

## Formatting Rules

 * Write your document using [Markdown](https://gitlab.ecs.vuw.ac.nz/help/user/markdown#gitlab-flavored-markdown-gfm) in your team's Git repository.
 * Submit only a single PDF file generated from the Markdown.
 * Major sections should be separated by a horizontal rule.


## Assessment

This assessment will be weighted at 20% on the architectural proof-of-concept(s), and 80% on the architecture document.

The proof-of-concept will be assessed for coverage (does it demonstrate all the technologies needed in your project, and all the technologies needed to build your project?) and quality (with an emphasis on simplicity, modularity, and modifiability).

The document assessment will consider both presentation and content. Group and individual marks will be assessed by identical criteria, the group mark for the finished PDF and the individual mark on the contributions visible through `git blame`, `git diff`, file histories, etc.

The presentation will be based on how easy it is to read, correct spelling, grammar, punctuation, clear diagrams, and so on.

The remaining content will be assessed according to its clarity, consistency, relevance, critical engagement and a demonstrated understanding of the material in the course. We look for evidence these traits are represented and assess the level of performance against these traits. The team's GitLab Group is expected to substantiate the submitted architecture document and _vice versa_; inspection of the GitLab Group for this substantiation forms part of the assessment. Each page of the report will be assessed at approximately the same value. Any material over the page limit may not be read and, as a consequence, reports that exceed the limit are unlikely to earn as high a mark as those which observe the page limit.

---
