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

# ENGR 301 Project *07* Architectural Design and Proof-of-Concept

**Authors:** Nathan Dunning, Lavanya Sajwan, Aatharsh Vijaya Sugumar, Doris Tam, Tsz Au

## 1. Introduction

One page overall introduction including sections 1.1 and 1.2 (ISO/IEC/IEEE 42010:2011(E) clause 5.2)

### Client

| Name                   | Organisation | Role            | Contact Details         |
| ----                   | ------------ | ----            | ---------------         |
| Chris Vallyon          | Beca         | Client          | chris.vallyon@beca.com<br>021 522 700 |

### 1.1 Purpose

The purpose of this system is to analyse the different modes and the current state of traffic flow of major cities in New Zealand to give insight for making transport-related decisions.

### 1.2 Scope

The Virtualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data.  The existing system should be able to run on any browser. The system will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken against the distance from the origin. Users can add CSV data sets to the application in order to display the information. The goal is to deliver a web application which will display a terrain topographic map which shows how long it takes to get into the city from different sections of a region using different modes such as cars, trains and buses. Another potential aim is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of the display analysis and apply users to make insight-driven decisions made in the transport sector. The regions will be therefore, adapted to show census regions, rather than the set distance zones it currently is. This would make it more effective for consultants as decisions can be made dependent on different and specific socio-economic groups.



### 1.3 Changes to requirements

If the requirement have changed significantly since the requirements document, outline the changes here. Changes must be justified and supported by evidence, i.e. they must be substantiated.
(max one page, only if required)

## 2. References

References to other documents or standards. Follow the IEEE Citation Reference scheme, available from the [IEEE website](https://ieee-dataport.org/sites/default/files/analysis/27/IEEE%20Citation%20Guidelines.pdf) (PDF; 20 KB).
(1 page, longer if required)

## 3. Architecture

Describe your system's architecture according to ISO/IEC/IEEE 42010:2011(E), ISO/IEC/IEEE 12207, ISO/IEC/IEEE 15289 and ISO/IEC/IEEE 15288.

Note in particular the note to clause 5 of 42010:

_"The verb include when used in Clause 5 indicates that either the information is present in the architecture description or reference to that information is provided therein."_

This means should refer to information (e.g. risks, requirements, models) in this or other documents rather than repeat information.

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
...

### 4.3 Process
This section provides an overview of the system processes and communication between them; including any weaknesses.

The system has two main processes:
1. Web Application. 
2. Database.  

### 4.4 Physical 

##### A Deployment Diagram shows the physical architecture:

![image](https://drive.google.com/uc?export=view&id=1dlFQ_Tz5Pniqv2RAIHvoXe08lMXinQ9j)

​	The Deployment Diagram shows the relationships and connectivities between the software components and hardware components in the system and the physical distribution of the processing. The physical hardware are users, the browser in computers they are using to interact with the application and three servers(Web Server, Application Server, Database Server) connect each other in order to achieve the functionalities of the application. 

​	The Web Server supports/contains frontend of the software which is the presentation of the user interface, the user interface is supported by presentation logic and can be separated into two parts: Login page and Map visualization page after user login succeeds. 

​	The Application Server and Database Server supports/contains the backend of the software, they are responsible for Application Logic and Data Storage/Data Processing respectively. The Application server takes into account primarily in how different data are used to display the different state of traffic flow and the functionalities navigation bar. The Database Server takes charge of the storage of both census traffic data and user login data and the encryption/decryption of the data.

​	The user's computer is connected to the Web Server via HTTP through the Internet so the users can log in a webpage to access the application. Where the Web Server is connected to the Application Server by using the JDBC(Java Database Connectivity). And Database Server is connected to the Application Server via Spring REACT API.	



### 4.5 Scenarios
...

## 5. Development Schedule

_For each subsection, make clear what (if anything) has changed from the requirements document._ If unchanged, these sections should be copied over from the requirements document, not simply cross-referenced.

Schedules must be justified and supported by evidence; they must be either direct client requirements or direct consequences of client requirements. If the requirements document did not contain justification or supporting evidence then both must be provided here.

### 5.1 Schedule

Identify dates for key project deliverables:

1. prototype(s).
1. first deployment to the client.
1. further releases required or specified by the client.

(1 page).

### 5.2 Budget and Procurement

#### 5.2.1 Budget

Present a budget for the project (as a table), showing the amount of expenditure the project requires and the date(s) on which it will be incurred. Substantiate each budget item by reference to fulfilment of project goals (one paragraph per item).

(1 page). 

#### 5.2.2 Procurement

Present a table of goods or services that will be required to deliver project goals and specify how they are to be procured (e.g. from the School or from an external organisation). These may be software applications, libraries, training or other infrastructure, including open source software. Justify and substantiate procurement with reference to fulfilment of project goals, one paragraph per item.
(1 page).

### 5.3 Risks 

Identify the ten most important project risks: their type, likelihood, impact, and mitigation strategies (3 pages).

### 5.4 Health and Safety

Document here project requirements for Health and Safety.

#### 5.4.1 Safety Plans

Safety Plans may be required for some projects, depending on project requirements.


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
