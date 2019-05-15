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

#####Client

| Name                   | Organisation | Role            | Contact Details         |
| ----                   | ------------ | ----            | ---------------         |
| Chris Vallyon          | Beca         | Client          | chris.vallyon@beca.com<br>021 522 700 |

### 1.1 Purpose

The purpose of this system is to analyse different modes of transport (car, bus, train) and the current state of traffic flow on major city networks (Wellington, Christchurch and Auckland) in New Zealand to give insight for making transport-related decisions.

### 1.2 Scope

The Virtualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data.  The system should be able to run on any browser. It will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken against the distance from the origin. Users can add CSV data sets to the application in order to display the information. The goal is to deliver a web application which will display a terrain topographic map which shows how long it takes to get into the city from different sections of a region using different modes such as cars, trains and buses. Another aim is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of the display analysis and apply users to make insight-driven decisions made in the transport sector. The regions will be therefore, adapted to show census regions, rather than the set distance zones it currently is. This would make it more effective for consultants as decisions can be made dependent on different and specific socio-economic groups.

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

### 3.2 Architectural Viewpoints
The following section of architectural viewpoints are used to breakdown the structure of the system and analyse the different components which will be used [[1]](https://ieeexplore.ieee.org/document/6129467). The five viewpoints evaluated are Logical, Development, Process, Physical and Scenarios. It is essential to analyse the system this way as combined they show multiple, concurrent views on the system and how they might effect functionality. Therefore, it provides a way to plan for any latency in our design. 

The Logical Architecture viewpoint outlines the functionality that the system will provide to its users [[2]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). The main characteristics are displayed in a class diagram. This is necessary so the team is able to identify what is needed. Therefore the two stakeholders involved are; the team, and the client. 

The Development Architecture viewpoint encompasses the system from the perspective of those involved in software development. In regards to the stakeholders; this is every team member. While the above viewpoint described the external requirements needed for the clients, this section provides an overview of the internal characteristics. Therefore, this section outlines the layers of the architecture and the key components within it [[2]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). A package diagram supports this section to show the organisation of the different layers.

The Process Architecture viewpoint provides an overview of the behaviour of the end product. This supplies the stakeholders; the clients, and the team, with possible ineffectiveness that the system may encounter due to the connections between layers and interaction with users. The activity diagram displays different tasks that the system my undergo simultaneously which can also affect functionality [[2]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf).

The Physical Architecture viewpoint focuses on mainly the non-functional requirements of the system such as availability, reliability, performance and scalability [[2]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf).  This is supported by the use of a deployment diagram to show the processing nodes and how they communicate. The main stakeholders that would be interested in this would be the team so that they have oversight on what nodes need to connect in order for the system to function.

The Scenario Architecture viewpoint provides functional scenarios which show how each combined previous viewpoints interact with each other in the system [[2]](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf). This section details main outcomes that users may take while using this software. Stakeholders interested in this are the clients, and the team. Use case diagrams provide a visual overview of the wanted characterises to outline desired architecture of the final software. 



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
2. Data Storage
3. Business Logic

#### 4.3.1 Web Application
The first interaction that the user will have is with the web application. This process is initiated by the user by running the program by opening the webpage hosted by Heroku or another approved cloud hosting program. This front end that the user sees has an established connection to the databases containing the transport network data as well as a database of logins id’s. The user will have to use their specific login details to enter the main application. If the incorrect login is shown the user will be prompted again. Once accepted the user will be granted access to the main map visuals. No other authentication is necessary to be provided.

The map will be displayed using data from the database. Data will also be able to be filtered here for users to make necessary consulting decisions.  

Performance is dependent on browser and hardware that the application is run on. There are also multiple errors on the back-end which can cause errors as the layout is dependent on the data being fed to the front-end. Error messages would show up, but need to be resolved as soon as possible. For users, error messages should also involve minimal jargon. 

Network latency can occur with bad and no internet connection as it will be hosted on a platform that requires internet access.

![image](https://www.dropbox.com/s/cxdh2qh07y4oq1n/WebApplication.jpg?dl=0)
The above descibed process is shown in this activity diagram.

#### 4.3.2 Data Storage
Data from CSV files will be preloaded and stored in a database that will be synchronised to the web application via the business logic process. When a user interacts with the web application, requests are sent and the databases are queried and return the information. This process is visually represented by the diagram below.

![image](https://www.dropbox.com/s/cxdh2qh07y4oq1n/WebApplication.jpg?dl=0)

Performance is dependent on how much data is loaded. Latency can occur due to this as it needs to process through all data points.  

#### 4.3.2 Business Logic 
The business logic is the process which manages outward and inward communication from the databases to the user interface of the web application. 

Performance is dependent on the number of queries being executed and from what parts of the web application. Negative performance can also occur with greater datasets, which can occur as we are provided more data from multiple different sources. 

High latency can occur is there are any issues with the Java Database Connectivity.

![image](https://www.dropbox.com/s/exhn6p34tu0ups0/altogether.jpg?dl=0)
This diagram shows the connections via the WebApplication process and the Data Storage. The business logic areas are represented by the control flow arrows between the front-end of the web application and the back-end of the data storage.

### 4.4 Physical 
...

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
