 # ENGR 301 Assignment 1: Project Requirements Document

The aim of this document is to
specify the requirements of the system your group is to build. 
The focus of a requirements document is the problem you are attempting to solve:  not a first attempt at a solution to that problem.
This document
should communicate clearly to the supervisor, client and course
coordinator what the system you build is going to do, and
what constraints it must meet while doing so.

The document should also demonstrate your understanding of the main
analysis principles and quality guidelines, and applicable standards, using tools and notations as necessary to communicate the requirements precisely,
unambiguously and clearly in a written technical document. Page specifications below are *limits not targets* and refer to the pages in the PDF generated from the markdown. Because the size of your document is necessarily limited, you should ensure
that you focus your efforts on those requirements that are most
important to completing a successful system: if sections are at their
page limit, indicate how many items would be expected in a complete
specification. 

The ENGR 301 project proposal and requirements document should be based
on the standard ISO/IEC/IEEE 29148:2011(E), primarily sections 8.4 and
9.5, plus section 9.4 for projects involving hardware and ISO 25010
SQuaRE for systemic requirements. While excerpts from the standard have been quoted within the template, to understand what is required it will be necessary to read earlier sections of the standards themselves. A supplementary treatment of requirements gathering in engineering projects may be found in [Requirements in Engineering Projects](https://victoria.rl.talis.com/items/F166DA94-DAD8-FBDB-0785-7A63C9BA3603.html?referrer=%2Flists%2F5886F297-2506-1F17-45D9-7F04CEE284EE.html%23item-F166DA94-DAD8-FBDB-0785-7A63C9BA3603) (Talis). The requirements
document should contain the sections listed below, and conform to the
formatting rules listed at the end of this brief. 

All team members are expected to contribute equally to the document and list
their contributions in section 6 of the document. You should work on
your document in your team's GitLab repository in a directory called
`M1_Requirements`. While collective contributions are expected to be the exception rather than the rule, if more than one team member has contributed to a particular 
commit then all those team member IDs should be included in the first line
of the git commit message. `git blame`, `git diff`, file histories, etc. will be tools used to assess individual contributions, so everyone is encouraged to contribute individually, commit early and commit often. Any team wishing to separate individually contributed sections into a single file before collation into the single proposal document for submission is welcome to do so.

---

<div style="page-break-after: always;"></div>

# ENGR 301 Project *NN* Project Proposal and Requirements Document
#### Author list, a comma-separated list of the names of each member of the team.

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2.

### Client

Identify the client and their contact details

### 1.1 Purpose

One sentence describing the purpose of the system (9.5.1)

### 1.2 Scope

One paragraph describing the scope of the system (9.5.2)

### 1.3 Product overview 
#### 1.3.1 Product perspective

One page defining the system's relationship to other related products
(9.5.3. but not the subsections in the standard.)

> **9.5.3 Product perspective** <br>
> Define the system's relationship to other related products. 
> 
> If the product is an element of a larger system, then relate the requirements of that larger system to the functionality of the product covered by the software requirements specification.
> 
> If the product is an element of a larger system, then identify the interfaces between the product covered by the software requirements specification and the larger system of which the product is an element. 
>
> A block diagram showing the major elements of the larger system, interconnections, and external interfaces can be helpful.
> 
> Describe how the software operates within the following constraints:  
a) System interfaces;  
b) User interfaces;  
c) Hardware interfaces;  
d) Software interfaces;  
e) Communications interfaces;  
f) Memory;  
g) Operations;  
h) Site adaptation requirements.

#### 1.3.2 Product functions

One page summary of the main functions of the product (9.5.4),
briefly characterising the minimum viable product.

#### 1.3.3 User characteristics   

One page identifying the main classes of users and their
characteristics (9.5.5) 

#### 1.3.4 Limitations

One page on the limitations on the product (9.5.6)

## 2. References

References to other documents or standards. Follow the IEEE Citation 
Reference scheme, available from the [IEEE website](https://www.ieee.org/) (please use the search box).
(1 page, longer if required)

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

The main purpose of this program is to serve as a tool to be used for data analysis, as a result the use cases of this program will and less defined and on a smaller scope. Use cases for this program consist of: 

#### Login<br>
**Actors:** 
* Client
* System

**Triggers:** 
* 	The user indicates that they want to login by clicking ‘login’

**Preconditions:**
* 	The user has filled in the password box

**Post-conditions:**
* 	The system will compare password input with database
* 	The user will know if login was successful or not

**Normal-Flow:**
1.	The user will indicate that they want to login by clicking the login button after entering their password into the password box
2.	The system will compare the password with the password on the database
3.	The system grants the user access to the application

**Alternate Flow:**

3. The system does not find a match between input string and password database
    1. The system informs the user with an error message and asks user to try again

#### Select current city<br>
**Actors:** 
* 	Client
* 	System

**Triggers:** 
* 	The user indicates that they want to change the location to another city by clicking on the ‘change city’ icon


**Preconditions:** 
* 	Other city data must be available

**Post-Conditions:**
* 	The system will output the selected city onto the graphical user interface
* 	The parameters/filters will reset to default values

**Normal-Flow:**
1.	The user will indicate that they want to change city location to another city by clicking the ‘change city’ icon
2.	The system will display, in a dropdown menu, the list of cities that the user may select from
3.	The user will select a new city to display
4.	The system will load the data from that city, stored locally, and display it onto the graphical user interface
5.	The system will reset and changed parameters or filters on the menu bar

**Alternate Flow:**

2. There is no additional data for other cities
    1. The system will only have 1 item in the list
    2. The user will be unable to change to another city


#### Navigate the map<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicates they want to navigate the map by dragging across the map
* 	The user indicates they want to navigate the map by pressing the designated arrow keys

**Preconditions:**
* 	The map is fully loaded
* 	The user is not fully zoomed out

**Post-Conditions:**
* 	The map will move to a new location

**Normal-Flow:**
1.	The user will indicate that they want to navigate the map by dragging across the map
2.	The system will calculate the distance dragged by the user and calculate new values
3.	The system will output new display on the graphical user interface

**Alternate Flow:**

1. The user presses one of the designated arrow keys 
    1.  The map will move by a fixed distance 
2. The system calculated that it is moving off the map
    1.	The system will display the edge of the map and no further

#### Select animation range<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicates they want to animate the map by clicking the ‘start time’ icon on the menu bar

**Preconditions:**
* 	There is data available through different times and days

**Post-Conditions:**
* 	The graphical user interface will animate through the time range selected

**Normal-Flow:**
1.	The user will indicate that they want to animate the map by clicking the ‘start time’ icon on the menu bar
2.	The system will display, in a calendar view, a date that the user can select from
3.	The user will select from the calendar view a date they want to start the animation from
4.	The system will display, in a dropdown menu, a time that the user can to start from
5.	The user will select from the dropdown menu a time they want to start from
6.	The system will display, in a calendar view, a date that the user can select to
7.	The user will select from the calendar view a date they want to start the animation to
8.	The system will display, in a dropdown menu, a time that the user can to start to
9.	The user will select from the dropdown menu a time they want to start to
10.	The system will animate data in frames from the start date to the end date in a loop

#### Select direction of flow<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicates they want to change the view of direction of flow by clicking on the designated ‘switch’ button

**Preconditions:**
* 	None

**Post-Conditions:**
* 	None

**Normal-Flow:**
1.	The user will indicate that they want to change the view of direction of flow by clicking on the designated ‘switch’ button
2.	The system will display on the graphical user interface information about the flipped direction

#### Change filters<br>
**Actors:** 
* 	Client
* 	System

**Triggers:** 
* 	The user indicates they want to change filters by clicking on the ‘next’ button or ‘previous’ buttons

**Preconditions:**
* 	None

**Post-Conditions:**
* 	None

**Normal-Flow:**
1.	The user will indicate that they want to change/cycle through filters by clicking the ‘next’ or ‘previous’ buttons
2.	The system will redisplay the next set of filters on the menu bar

**Alternate Flow:**

2. The user is on the last filter clicking ‘next’
    1. The system will redisplay the same filters on the menu bar

#### View section/zone<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicates they want to view information on a section by clicking on it

**Preconditions:**
* 	There is data for each divided zone

**Post-Conditions:**
* 	The user will know in detail information about that zone

**Normal-Flow:**
1.	The user will indicate they want to view information on a section by clicking on it
2.	The system will display in pop* up information about the requested zone
3.	The user will close the pop* up when finished

**Alternate Flow:**

1. No information about that section found
    1. The system will display nothing

#### Select type of transport<br>
**Actors:** 
* 	Client
* 	System

**Triggers:** 
* 	The user indicates they want to select the mode of transportation by clicking the designated ‘change type’ button located on the side of the screen

**Preconditions:**
* 	There is available data for different transport modes

**Post-Conditions:**
* 	The system will display data on the graphical user interface of a different mode

**Normal-Flow:**
1.	The user will indicate that they want to select the mode of transportation by clicking the designated ‘change type’ button
2.	The system will display a dropdown menu containing the list of different transport types the user can choose from
3.	The user selects the new transport type by clicking on the on the items on the dropdown menu
4.	The system will read data from that type of transportation, stored locally, and display it on the graphical user interface

**Alternate Flow:**

3. There is no data stored locally about that type of data
    1. The system will display one item in the dropdown menu
    2. The user will be unable to change transport type

#### Change map view<br>
**Actors:** 
* 	Client
* 	System

**Triggers:** 
* 	The user indicates they want to change the view of the map by clicking the designated ‘change map’ icon

**Preconditions:**
* 	There are different sources of data stored locally

**Post-Conditions:**
* The user sees a different view on the graphical user interface

**Normal-Flow:**
1.	The user will indicate that they want to change the view of the map by clicking the designated ‘change map’ icon
2.	The system will display a dropdown menu containing the list of map views the user can choose from
3.	The user selects the new map view by clicking on the on the items on the dropdown menu
4.	The system will read data from that corresponding map view, stored locally, and display it on the graphical user interface

**Alternate Flow:**
3. There is no data stored locally about that type of data  
    1. The system will display one item in the dropdown menu  
    2. The user will be unable to change map view

#### Change zoom<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicates they want to change zoom by scrolling their mouse wheel
* 	The user indicated they want to change zoom by adjusting the zoom slider

**Preconditions:**
* 	The user is not already fully zoomed in or out

**Post-Conditions:**
* 	None

**Normal-Flow:**
1.	The user will indicate that they want to change zoom by scrolling their mouse wheel or changing the slider
2.	The system will change zoom by a fixed amount and redisplay to the graphical user interface

**Alternate Flow:**

2. The user is already fully zoomed in one direction
    1. The system re-display at the max/min zoom

#### Change scale<br>
**Actors:** 
* 	Client
* 	System

**Triggers:**
* 	The user indicated they want to change scale by adjusting the scale slider

**Preconditions:**
* 	None

**Post-Conditions:**
* 	None

**Normal-Flow:**
1.	The user will indicate that they want to change scale by changing the scale slider
2.	The system will change scale along the legend on the right side of the screen
3.	The system will change colours of zone corresponding to the legend


### 3.3 Usability Requirements

See 9.5.12. for most systems this will be around one page.

> **9.5.12 Usability requirements**<br>
> Define usability (quality in use) requirements. Usability requirements and objectives for the software system include measurable effectiveness, efficiency, and satisfaction criteria in specific contexts of use.

### 3.4 Performance requirements

See 9.5.13. for most systems this will be around one page.
Hardware projects also see section 9.4.6.

> **9.5.13 Performance requirements** <br>
> Specify both the static and the dynamic numerical requirements placed on the software or on human interaction with the software as a whole. 
> 
> Static numerical requirements may include the following:
> 
> a) The number of terminals to be supported;  
> b) The number of simultaneous users to be supported;  
> c) Amount and type of information to be handled.
> 
> Static numerical requirements are sometimes identified under a separate section entitled Capacity.
> 
> Dynamic numerical requirements may include, for example, the numbers of transactions and tasks and the amount of data to be processed within certain time periods for both normal and peak workload conditions. The performance requirements should be stated in measurable terms.
> 
>  For example, "_95 % of the transactions shall be processed in less than 1 second._" rather than, "An operator shall not have to wait for the transaction to complete."
> 
> NOTE Numerical limits applied to one specific function are normally specified as part of the processing subparagraph description of that function.


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

### 3.6 Design constraints

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

3 pages outlining how you will verify that the product meets the
most important specific requirements. The format of this section
should parallel section 3 of your document (see 9.5.18).
Wherever possible (especially systemic requirements) you should
indicate testable acceptance criteria.

## 5. Development schedule.

### 5.1 Schedule

Identify dates for key project deliverables: 

1. architectural prototype
1. minimum viable product
1. further releases

(1 page).

### 5.2 Budget

Present a budget for the project (table), and justify each budget item
(one paragraph per item, one page overall). 

### 5.3 Risks 

Identify the ten most important project risks to achieving project goals: their type, likelihood,
impact, and mitigation strategies (3 pages).

If the project will involve any work outside the ECS laboratories, i.e. off-campus activities, these should be included in the following section.

### 5.4 Health and Safety

Document here project requirements for Health and Safety. All teams must state in this section:

1. How teams will manage computer-related risks such as Occupational Over Use, Cable management, etc.  

2. Whether project work requires work or testing at any external (off-campus) workplaces/sites. If so, state the team's plans for receiving a Health and Safety induction for the external workplaces/sites. If the team has already received such an induction, state the date it was received. 

3. Whether project work requires the team test with human or animal subjects? If so, explain why there is no option but for the team to perform this testing, and state the team's plans for receiving Ethics Approval _prior_ to testing.

Also document in this section any additional discussions with the School Safety Officer regarding Health and Safety risks. Give any further information on relevant health and safety regulations, risks, and mitigations, etc.


#### 5.4.1 Safety Plans

Safety Plans may be required for some projects, depending on project requirements. Safety Plan templates are available on the course Health & Safety page. Two questions all teams must answer are:

**Do project requirements involve anything that can cause serious harm or death?**  
Examples: building/modifying devices using voltages > 60 V, chemicals, large moving machinery, flying devices, bodies of water.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving serious harm or death, you must first contact the School Safety Officer and Course Coordinator first to discuss the Safety Plan and project requirements.

**Do project requirements involve anything that can cause harm or injury?**  
Examples: building/modifying things with voltages <= 60V, small moving machinery, wearable devices.

If so, you will have to write a separate Safety Plan as part of project requirements, and the Safety Plan must be referenced in this section. For health and safety risks involving har or injury, you should write a draft of the Safety Plan before contacting the School Safety Officer and Course Coordinator to discuss the Safety Plan and project requirements.

If a safety plan is required, list in this section the date the School Safety officer accepted your Health and Safety plan (if accepted by submission date).

_If the project is purely software and requires no contact risks involving physical harm, then state "Project requirements do not involve risk of death, serious harm, harm or injury." in this section._


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
