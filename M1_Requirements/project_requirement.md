

# ENGR 301 Project *NN* Project Proposal and Requirements Document
#### Aatharsh Vijaya Sugumar, Doris Tam, Lavanya Sajwan, Nathan Dunning, Tsz Au

## 1. Introduction

### Client

Chris Vallyon  
Beca  
chris.vallyon@beca.com  


### 1.1 Purpose
Analyses the different modes and the current state of traffic flow of major cities in New Zealand to give insight when making transport-related decisions.
### 1.2 Scope

The Virtualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators to gain insight to drive their decisions by viewing a visual analysis of the transport flow data. The existing system will be able to run on any browser and potentially as a web application. The system will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken again the distance from the origin. Users can add CSV data sets to the application to read the files. The goal is to deliver a web application which will display a terrain topographic map potentially showing the how long it takes to get into the city from different suburbs using different modes e.g. car, train and bus. Another potential deliverable is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of this system to display analysis and apply users to make insight-driven decisions made in the transport sector.
### 1.3 Product overview
#### 1.3.1 Product perspective

The system will be a standalone web application which does not interact with a larger system and or products. It runs on a front-end view library React which uses inner libraries to organise the data sources and execute the virtualization.

The virtualization of transport analysis is created through processing CSV datasets in the system which hold information about transport networks that were recorded in real-time for an extended period.

The code base of the system will be written using React, a Javascript-based front-end views library. The constraints that will come with this is that it relies on the availability and understanding of specific internal libraries that aid with processing files and executing functions within the system.


The user interface will have two main views, one page for to instruct the user how to use the application which will inform them on potential errors as well as the main view displaying the topographical map.

This system will not be limited to a specific browser or operating system.

For the minimum viable product, the team will produce a working web application. The user will be able to navigate to the main page and select a city and time period to display traffic flow analysis for commutes to the CBD from an origin.


#### 1.3.2 Product functions

The application will allow the user a snapshot of the transport network flow by selecting a specific date and time of day in the navigation bar, as well as show an animated virtualization for the whole day, selected.
Depending on the city of the observation, the map legend may be customized to adapt to more densely populated cities and enable better visualisation of the analysis on the map.

Upon reading the selected day, the user may select a zone nearby the origin/destination on the map to check how long it takes to get to the destination from that specific area.

The map will display a terrain topography that may include train railways and highways.

The legend customization will also allow the user to toggle through speeds at which the virtualization progresses through the analysis.


#### 1.3.3 User characteristics   

Over the next two years, the New Zealand transport agency and the regional council and local councils will be focusing their efforts on improving public transport because the new government direction providing public transport and alternatives to a car as the for making commutes into the CBD.

Therefore, the main users of this application will be members of local, regional agencies and councils as well as other decision makers who will impact the public transport in New Zealand. These users will unlikely to have a technological background nor have experienced using a similar system. For this application to be effective, it requires a simple and intuitive interaction that doesn't require much effort by the user or to have previous experience or knowledge.

The users will likely be sharing the snapshots of the virtualization with other members of the decision-making party in meetings and talks so the map will be the main component of the view.


#### 1.3.4 Limitations

To extend this application's functionality, more datasets of other modes of transport would need to be available. The project is constrained by the accessibility to this data as it requires financial assistance and an unpredictable period of time for the client to retrieve the additional data. This limits the effectiveness of the minimum viable product as the current bus and train transport data are based on scheduled services, unlike the car transport data.
## 2. References

HOW TO WRITE PERFORMANCE REQUIREMENTS WITH EXAMPLE
<br>1202Performance. (2019). How to write Performance Requirements with Example. [online] Available at: http://www.1202performance.com/atricles/how-to-write-performance-requirements-with-example/ [Accessed 31 Mar. 2019].

USABILITY FIRST - ABOUT USABILITY - REQUIREMENTS SPECIFICATION | USABILITY FIRST
<br>Usabilityfirst.com. (2019). Usability First - About Usability - Requirements Specification | Usability First. [online] Available at: http://www.usabilityfirst.com/about-usability/requirements-specification/ [Accessed 31 Mar. 2019].

WHAT ARE THE FOUR FUNDAMENTAL METHODS OF REQUIREMENT VERIFICATION?
<br>Modernanalyst.com. (2019). What are the four fundamental methods of requirement verification?. [online] Available at: https://www.modernanalyst.com/Careers/InterviewQuestions/tabid/128/ID/1168/What-are-the-four-fundamental-methods-of-requirement-verification.aspx [Accessed 31 Mar. 2019].

## 3. Specific requirements  

### 3.1 External interfaces

The system interfaces required for the final product consist of:
#### User Interface
The system will have a graphical user interface consisting of buttons, menu bars, an interactive map and data filters. All features will be interacted with through mouse input commands which will change the output of the information shown on the screen. Along the menu bar, there will be many different filters that allows users to set parameters from a list of values, this ensures the user cannot specifically enter a value that is outside of the specified range. Specific functionalities regarding user interface that require implementing are:
* The client has stated that there are not enough filters in the current build of the program and has specified that there needs to be more filters and modes to switch between. Specific modes include
  * Being able to change the view of the map from displaying information of a weekly average down to a daily average
  * Being able to switch to a transport data map view. 
  * Being able to animate the map through a user defined start and end date
* The client has stated that information must be displayed in zones with visible data going to and from the city centre, users should not be able to select other specific origins and destinations.
* Displayed units of measure must be fixed and consistent
  * The unit for time will always be in minutes
  * The unit for distance will be in kilometres
  * Each zone will show the transport time vs deprivation index
* Keyboard inputs such as arrow keys and functions keys will be available for navigating the map and changing parameters, information on shortcuts and keyboard functions will be displayed under the help tab.
* The current build of the program is optimised when ran full-screen on a 16:9 aspect ratio as distances between objects and icons are more legible and correctly spaced at this ratio and size. The client has stated that the current layout and format of the screen is good and does not need to be changed.
* The interface will comprise of having an added help bar tab towards the top of the screen, which users can refer to when looking to troubleshoot an issue or to simply find out more about a functionality. 
  * In the case where an error is to be thrown, there will be an error message appearing in a window that describes the issue and will refer the user to a section in the help page where the user can find out more about the issue
* The map will be displayed across the centre of the user, the user will be able to click on different areas on the map which will bring up a window containing further information about that zone.
  * The current build of the program does not show bigger landmarks and roads such as state highways and major intersections, the client has stated that this should be implemented
The main purpose of this user interface is to conclusively serve as a mean of visual data display allowing clients to effectively analyse traffic related data by applying different filters through different scopes. The user interface allows for clients to customise their preferences to extract useful data and assist them in make inferences

#### Software Interface
The use of specific software products or packages have not been specified however, upon attaining and analysing the code base from the current product build, it can be concluded that the source code was written in CSS and JavaScript using frameworks comprising of React together with Redux. The data system currently works by reading locally stored, nested CSV files containing multiple rows and columns of data where each column is a parameter and each row is a new entry. 
The client has specified that the system should be able to read data from the following:
* New Zealand Transport Data
  * Spreadsheet containing rows and columns
* Google Transport Data
  * Text files with tab space delimiters
  * Data files (.dat) containing tab space delimiters
* Telco Data

The client has also specified that there needs to a login system before the program can be used.
The purpose of this software interface is to read the locally stored data files and display them onto the graphical user interface for the client. The software must be able to process and display the data in different ways depending on the parameters the user set.

#### Hardware Interface
There are no specific requirements for any hardware elements of any type.



### 3.2 Functions

This is typically the longest subsection in the document - see 9.5.11.
List up to fifty use cases (in order of priority for development), and
for at least top ten focal use cases, write a short goal statement and
use case body (up to seven pages).  Identify the use cases that
comprise a minimum viable product.

### 3.3 Usability Requirements
This section aims to outline the aim of the system in terms of user experience. 

#### 3.3.1 Log In

A log in portal would be useful but is not considered a necessity as there is not a need for functionality which allows users to save and load decisions on the application. Users will have all the same permissions when using the tool, so the portal opens in on the same interface for everyone.

#### 3.3.2 Users 

Users will be internal Beca employees and will primarily use the application as a decision-making tool to consult on transport networks for clients. Due to this, users do not necessarily have much technical experience so they are not expected to understand any programming jargon in error messages and should not need to code to use the tool.   

The users are expected to be able to use the tool without too much extra learning. This is so there is a minimal cost of time spent, both by the new users and the experienced users that may be teaching them. Therefore, users should be able to use the application after a short tutorial of no longer than half an hour, and it should be easy to read.  

The front-end interface should remain easy to read and pleasant to look at for user satisfaction.

#### 3.3.3 Interaction

Users need to be able to interact with the tool by using the mouse and clicking buttons on the front-end interface. The mouse should be able to hover over sections of the map to show the time to the origin point of interest in the CBD of the cities. Buttons should be able to respond to user requests, and mouse clicks on the map should ideally virtualise off-peak and on-peak times.  Use of the keyboard can be an added functionality to move around the transport network map but is not a necessity.

"Help" messages would be a useful addition to the current software to remind the user what each button and the drop-down menus do. This information should be easy to understand and be orientated around the understanding of the user – therefore, keep the language close to transport subject and not programming. 

The software does not need to be integrated with any other existing software in use at Beca.

#### 3.3.4 Web Capabilities

The application needs to work on Internet Explorer 11. Functionality can be added to other browsers such as Google Chrome, but users will need to be informed when opening the application.  It does not need an internet connection to run. 

### 3.4 Performance requirements
The purpose of this section is to outline and specify static and dynamic numerical requirements which will be placed on both the software and the human interaction with the software.

#### 3.4.1 Response Time

With more data intended on being acquired in order to make necessary decisions from the tool, there will be a lot more information which has to be filtered by the API backend interface. However, this should remain a relatively quick response time; no later than 10 seconds so the user does not become uninterested in the application. However, 90% of the responses should not reach 10 seconds.

#### 3.4.2 Workload 

The application should be able to support no more than simultaneous ten users at a time. The following is a scenario table which explains what the workload will cover as well as the think time for users for doing so. Due to the small nature of the number of individuals expected to use this tool, we expect 1400 user interactions when using this tool to consult. 

| Scenario                 | Daily Total | Pages                                                                                       | Think Time |
|--------------------------|-------------|---------------------------------------------------------------------------------------------|------------|
| View Map Screen          | 40          | Login Portal, Interactive Map Display, Exit                                                 | 20 seconds |
| Interact with Map Screen | 1000        | Login Portal, Interactive Map Display, Filter Types, Change Scale, Mouse Click on Map, Exit | 90 seconds |

The application will be usually used later in the day as users will come into work in the morning, have meetings usually earlier in the day, and after lunch, the workload is expected to peak.  The application will then have to be able to support comparatively more interactions in the afternoon. 

#### 3.4.3 Data Details

The data used for the application to run will be three times the data currently available. Moreover, the CSV files will be manually loaded and as time is dependent on the amount; we expect this may be a lengthy process. However, we aim to make it no longer than 5 minutes though the client was not too bothered by time constraints. The aim is to have 95% of every load to occur under 5 minutes.

### 3.5 Logical database requirements
Identified classes are:
* user
* user terminal
* location
* vehicle
* server
* database

![image](https://drive.google.com/uc?export=view&id=1uthiaR9KXYPtLD8d5fIdD4p2CY80Lsb7)


Process flow for the applicaton:
* User logs in.
* User enters the necessary details.
* User terminal gathers required details.
* User can only choose from the available transport options and the location details.
* User terminal establishes a connection through server.
* Server interacts with the database to process the request.
* Database returns appropriate results.
* User terminal displays the results to the user.

##### User:
User will be the primary actor to interact with the application through user interface. The query to process will be formed based on the input provided by the user.

##### User terminal:
User terminal is an interface that connects user to the back-end application. It gathers all the required inputs from the user and interacts with vehicle and location to cross-check the validity of the input.

##### Vehicle:
Vehicle class has information about the mode of transport that the application supports. As the application scales up to support different modes of transport, vehicle class can be updated to reflect the same.

##### Location:
Location has details about the geographical area that the application supports. As the appication scales up to support different locations, location data can be updated.

##### Server:
Server establishes the connection to the database, query the database and return the result back to the user terminal.

##### Database:
Database will have all the necessary data to support the application. Query will be processed based on the mode of transport, time of travel and the lat-long details. Data related to different mode of transport will be stored seperately to avoid latency.

> 9.5.15 Design constraints<br>
> Specify constraints on the system design imposed by external standards, regulatory requirements, or project limitations.
>
> 9.5.16 Standards compliance<br>
> Specify the requirements derived from existing standards or regulations, including:
>
> a) Report format;<br>
> b) Data naming;<br>
> c) Accounting procedures;<br>
> d) Audit tracing.
>
> For example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement
may, for example, state that all changes to a payroll database shall be recorded in a trace file with before and
after values.

### 3.7 Nonfunctional system attributes

see 9.5.15 and 9.5.16. for most systems, this will be around one page.

> 9.5.15 Design constraints<br>
> Specify constraints on the system design imposed by external standards, regulatory requirements, or project limitations.
>
> 9.5.16 Standards compliance<br>
> Specify the requirements derived from existing standards or regulations, including:
>
> a) Report format;<br>
> b) Data naming;<br>
> c) Accounting procedures;<br>
> d) Audit tracing.
>
> For example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement
may, for example, state that all changes to a payroll database shall be recorded in a trace file with before and
after values.

### 3.7 Nonfunctional system attributes

Present the systemic (aka nonfunctional) requirements of the product
(see ISO/IEC 25010).
List up to twenty systemic requirements / attributes.
Write a short natural language description of the top nonfunctional
requirements (approx. five pages).


### 3.8 Physical and Environmental Requirements

For systems with hardware components, identify the physical
characteristics of that hardware (9.4.10) and environment conditions
in which it must operate (9.4.11).  Depending on the project, this
section may be from one page up to 5 pages.

### 3.9 Supporting information

see 9.5.19.

## 4. Verification

The purpose of this section is to verify how the product will meet the important requirements.

### 4.1 External Interfaces Verification

| **Requirement**: Application should be able to communicate with the nested CSV files <br> **Verification Method**: Test                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Complete a series of tests where the CSV files are manually loaded into the application and that the maps are able to be loaded and are accurate. |

### 4.2 Functional Requirements Verification

| **Requirement**: Application should allow to switch to a transport data map view<br>**Verification Method**: Test                          |
|--------------------------------------------------------------------------------------------------------------------------------------------|
| When enough data is available, load them to the application and testing needs to occur to ensure that users can swap between the two maps. |

| **Requirement**: Login system needs to be defined<br>**Verification Method**: Test, Demonstration                                                                                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A user attempts to login to the system.  The application should check that login details are valid. If the details are invalid, the user should be prompted with an error message and is asked to try again. If the details are valid, the application should grant the user access to the interactive map. Testing needs to occur to ensure that the program is secure. |

| **Requirement**: Users indicate that they want to animate the map by clicking “start time” icon on the menu bar<br>**Verification Method**: Test, Demonstration                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The system should animate data in frames from the start and end in a loop. This should be done by the users set parameters until indicated to stop. Testing should occur to check that all filters work based on user input. |

| **Requirement**: Users should be able to click sections and view detailed information on it<br>**Verification Method**: Test, Demonstration |
|---------------------------------------------------------------------------------------------------------------------------------------------|
| Testing is essential to view whether the mouse clicks are listened to and open up information of the section.                               |

| **Requirement**: Users should be able to show specific map information depending on selected transport mode<br>**Verification Method**: Test, Demonstration                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| After selecting the transport type from the drop down menu, the system should read the data for that type of data from locally stored information. Testing is essential to view whether the mouse clicks are listened to and open up the different transport information and thus display it on the graphical user interface |

### 4.3 Usability Requirements Verification

#### 4.3.1 Users

| **Requirement**: The application needs to use straightforward wording in order for it to be user friendly <br>**Verification Method**: Inspection                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The team needs to program with the users in mind, and verify that language being used is easy to understand for an everyday user. A “Help” tool would be an advantageous addition to the application in order to remind users about the different functionality available. The client should be asked to use the software at increments throughout the year for their feedback. |

| **Requirement**: Navigation should be simple to pick up and understand<br> **Verification Method**: Inspection, Demonstration                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The front-end interface should be intuitive, and clearly labelled.  Layout should remain minimal and have an aesthetic which allows for the user to remain engaged.  The client should be asked to use the software at increments throughout the year for their feedback. |

#### 4.3.2 Interaction 

| **Requirement**: Keyboard inputs such as arrow keys and function keys will be available for navigating the map, changing parameters as well as use of the mouse for clicking the buttons choosing drop down options and general user interaction<br>**Verification Method**: Test, Demonstration |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Once the application is loaded, the system should allow for users to interact with the map by the use of the keyboard and mouse.                                                                                                                                                                 |

#### 4.3.3 Web Capabilities

| **Requirement**: Application needs to work on Internet Explorer 11 and can be extended to work on other browsers. Users will need to be aware of preference<br>**Verification Method**: Inspection, Demonstration |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The application will need to be opened on a range of web browsers to manual test functionality. The client will also need to do this so ensure that it is clear to understand and execute.                        |

### 4.4 Performance Requirements Verification

#### 4.4.1 Response Time

| **Requirement**: Application responses to the user should be no longer than 10 seconds with 90% of the responses not reaching up to that mark<br>**Verification Method**: Test, Analysis |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A series of tests will need to be completed in order to record and calculate the average the application takes to respond to users.                                                      |

#### 4.4.2 Workload

| **Requirement**: Application should be able to support up to 10 users at a time.<br>**Verification Method**:  Test, Demonstration                                                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Automated testing will be needed to ensure that multiple individuals can use this program at once. To mirror the workflow peaks, testing will need to occur with a varying number of test users in order to ensure that the program can deal with a change of people. |

| **Requirement**: Manually loading the CSV files will need to occur in less than 5 minutes. <br>**Verification Method**: Analysis |
|-----------------------------------------------------------------------------------------------------------------------------------|
| Test to measure the time it takes to load and record the findings. Find the average in order to mitigate any variance in times.   |

### 4.5 Design Constraints Verification

### 4.6 Non-functional Requirements Verificaton

| **Requirement**: Data Integrity<br> **Verification method**:  Inspection|
|:--------------------------------------------------------------------|
| Due to the possible privacy issues with the data held and that this tool will be needed to make accurate decisions. Data cannot be changed. Human error will cause these issues, so the team has to be cautious when dealing with the data |
<br>
 
| **Requirement**: Maintainability <br> **Verification method**: Analysis |
|:------------------------------------------------------------------------|
| The code needs to be well documented for the understanding of the team as well as future handoff to client so they can build upon the application and understand how it works. |




## 5. Development schedule

### 5.1 Schedule

Key dates for project deliverables:

1. Architectural prototype - 13 May, 2019
1. Minimum viable product - 7 June, 2019
1. Further releases:
    1. Release 1.1 - 8 August, 2019
    2. Relaese 1.2 - 9 September, 2019
    3. Release 1.3 - 11 October, 2019

Initial phase of the project will be focussed on the architecture and design. Data sources will be identified and the product architecture will be finalised during this phase.

Agile development methodology is being followed for product development. Entire product cycle is splitted into four MVPs (Minimum Viable Product). Each MVP consists of two sprints and each sprint will run for two weeks. During the start of each sprint, potential tasks will be identified and the same will be equally distributed within the team members. The tasks will be updated on the gitlab and there should be continuous update on the progress of each task, so that every team member is aware of the deliverable for that sprint. If some tasks are not completed (worst case), those will be pushed to the next sprint. Each sprint will have a  board on the gitlab and the tasks for that sprint will be updated on the corresponding board.  

There will be two stand-up sessions each week during the lab hours to discuss the status of each task. Each task will have a completion date and the track for completion of each task will be updated during the stand-up.

Demo for each MVP will be showcased to the client and the feedbacks will be considered during the planning of the next MVP. Last MVP will have a close off spirint, during which all the backlogs will be considered for completion.

#### Architecture Design Phase - 1 April to 5 May  
#### MVP - 7 May to 11 October  

1. MVP1 (7 May to 7 June)
    1. Sprint1 - 7 May to 21 May
    2. Sprint2 - 22 May to 7 June


2. MVP2 (8 July to 8 August)
    1. Sprint1 - 8 July to 20 July
    2. Sprint2 - 21 July to 8 August


3. MVP3 (9 August to 9 September)
    1. Sprint1 - 9 August to 21 August
    2. Sprint2 - 22 August to 9 September


4. MVP4 (10 September to 11 October)
    1. Sprint1 - 10 September to 23 September
    2. Sprint2 - 24 September to 11 October (close-off sprint)

### 5.2 Budget
| Budget Item                                           | Budget     |
| ----------------------------------------------------- |:----------:|
| Obtain required data from different sources           | 1500       |

Since the application uses data to analyze the traffic volume within the city, the data has to obtained from different sources. Data from these sources has to be combined and a model has to be trained to process or the analyze data. The efficiency of the application depends upon the quality of the data. So it is essential to fetch data from trusted sources and enough data to support the usecases. These sources may include google API for travel data, onzo, taxi-data, telco and census data for demographic information . Considering the time and the agreement related issues, a data source can be finalised and development can start on the obtained data. The model can be trained further to analyze data from different sources.

### 5.3 Risks

Risk in software development is a potential problem which prevent an individual or a group of people from reaching the project goal. Risk is the possibility of suffering loss, and total risk exposure to a specific project will account for both the probability and the size of the potential loss.  

| Risks                                                 | Likelihood |   Severity  |
| ----------------------------------------------------- |:----------:|:-----------:|
| Resources are ill at critical times in the project    | Low        |    Severe   |
| Frequent changes in project requirements              | Low        |    Severe   |
| Failure to obtain data from defined sources           | Moderate   |    Critical |
| Miscommunication within the team or with the client   | Moderate   |    Moderate |
| Underestimation of development life cycle             | Low        |    Critical |
| Financial risks to obtain resources                   | Moderate   |    High     |
| Failure to arrive at proper budget estimation         | Low        |    High     |
| Loss of data or code due to workstation failure       | Moderate   |    High     |
| Gold plating - Decoration before functionalities      | Low        |    Low      |
| Functionalities not performing as expected            | Moderate   |    High     |  

Most software development projects are inherently risky because of the variety of problems that may arise. Severity of Inevitable risks can be mitigated with prior planning and taking necessary precautions.  

| Risks                                                 | Mitigation  |
| ----------------------------------------------------- |:-----------|
| Resources are ill at critical times in the project    | Provide knowledge transfer so that everyone is capable of doing a particular task. Documentation is required to understand the functionalities of the application.|
| Frequent changes in project requirements              | Freeze the requirements at the design stage by having frequent interactions with the client. Some degree of requirement change is allowed.   |
| Failure to obtain data from defined sources           | Find any open source data that is required for the project and use the same if there is any discrepancy in obtaining original data from the client. |
| Miscommunication within the team or with the client   | Clarify the understanding with the team member or with the client until its clear. Use client meetings and team stand-ups in an effective manner. |
| Underestimation of development life cycle             | Invest more time on planning and the design phase. Gather all the requirements from the client at this stage and plan accordingly.  |
| Financial risks to obtain resources                   | Proper planning of the resources with the available budget. Contact the coordinator incase of budget issues.      |
| Failure to arrive at proper budget estimation         | Estimate the budget according the required resources.        |
| Loss of data or code due to workstation failure       | Frequent commits to the git repository with appropriate commit messages. Commit messages are used to commit from or revert back from a particular point.    |
| Gold plating - Decoration before functionalities      | Prioritize the completion of functionalities. Gold plating is required at some level, but only after developing the working product.         |
| Functionalities not performing as expected            | Write unit test cases and perform functionality tests after completion of each functionality. Perform integration tests once completing all the necessary functionalities.          |  


### 5.4 Health and Safety

| Risks                                                 | Likelihood |   Severity  |
| ----------------------------------------------------- |:----------:|:-----------:|
| Occupational overuse syndrome                         | Moderate   |    Severe   |
| Earthquake in the lab                                 | Low        |    High     |
| Injury while attending a meeting at client office     | Low        |    High     |
| Mental stress because of the workload                 | Moderate   |    High     |
| Eye strain from computer use                          | Low        |    Moderate |
| Fire in the lab                                       | Low        |    Severe   |

| Risks                                                 | Mitigation  |
| ----------------------------------------------------- |:-----------|
| Occupational overuse syndrome                                 | Mix your tasks to avoid long, uninterrupted stretches of using the computer. Remove your hands from keyboard and mouse when not actively using them. |
| Earthquake in the lab                                         | Listen carefully to the earthquake related announcements. Hide under the desk incase of an earthquake.  |
| Injury while attending a meeting at client office             | Be aware if the client office is in the earthquake prone zone. Take safety precautions and attend safety related inductions at the client office.  |
| Mental stress because of the workload                         | Establish boundaries and take time to relax. Talk to team members or the coordinator incase of work overload.   |
| Eye strain from computer use                                  | Maintain a good distance from the monitor. Mix your tasks to avoid long, uninterrupted stretches of using the computer          |
| Fire in the lab                                               | Listen to the fire related announcements and read the signs. Pull the nearest fire alarm as you exit the building.          |



#### 5.4.1 Safety Plans

Project requirements do not involve risk of death, serious harm, harm or injury.

---

## 6. Appendices
### 6.1 Assumptions and dependencies

One page on assumptions and dependencies (9.5.7).

### 6.2 Acronyms and abbreviations

One page glossary _as required_.

## 7. Contributions

A one page statement of contributions that lists each member of the
group and what they contributed to this document.

---

## Formatting Rules

 * Write your document using [Markdown](https://gitlab.ecs.vuw.ac.nz/help/user/markdown#gitlab-flavored-markdown-gfm) and ensure you commit your work to your team's Git repository.
 * Submit only a single PDF file generated from the Markdown using one of the common Markdown renderers.
 * Major sections should be separated by a horizontal rule.


## Assessment

Each contributor to the document will recieve an individual assessment, based on both the finished PDF, and contributions to the project visible through ``git blame``, ``git diff``, file histories, etc.  

The goal of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem. The most important factor in the assessmernt of the document is how will it meets that goal.  The document will be assessed for both presentation and content.

The presentation will be based on how easy it is to read, correct spelling, grammar, punctuation, clear diagrams, and so on.

The content will be assessed according to its clarity, consistency, relevance, critical engagement and a demonstrated understanding of the material in the course. We look for evidence these traits are represented and assess the level of performance against these traits. Each page of the report will be assessed at approximately the same value. Any material over the page limit may not be read and, as a consequence, reports that exceed the limit are unlikely to earn as high a mark as those which observe the page limit.

We aim to evaluate ENGR301 documents and projects as if they were real projects rather than academic exercises &mdash; especially as they are real projects with real clients. The best way to get a good mark in a document or assessment is to do the right thing for your project, your client, and your team. We encourage you to raise questions with your tutor, project champion, or course staff, as soon as possible, so you can incorporate their feedback into your work.

---
