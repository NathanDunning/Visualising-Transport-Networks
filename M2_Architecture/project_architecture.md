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
...

### 4.3 Process
...

### 4.4 Physical 
...

### 4.5 Scenarios
...

## 5. Development Schedule
The date of deliverable for Architectural prototype, schedule and number of sprints for MVP1 has been changed from the original requirements to incorporate the number of issues identified during MVP planning.

Key dates for project deliverables:
1. Architectural prototype - 26 May, 2019
1. Minimum viable product - 7 June, 2019
1. Further releases:
    1. Release 1.1 - 8 August, 2019
    2. Relaese 1.2 - 9 September, 2019
    3. Release 1.3 - 11 October, 2019

The initial phase of the project will focus on architecture and design. Data sources will be identified, and the product architecture will be finalised during this phase.

Agile development methodology [1] will be followed for product development. Entire product cycle is split into four MVPs (Minimum Viable Product). Each MVP consists of two sprints, and each sprint will run for two weeks. During the start of each sprint, potential tasks will be identified and will be equally distributed to team members. The tasks will be updated on the Gitlab repository and there should be a continuous update on the progress of each task so that every team member is aware of the deliverable for that sprint. If some tasks are not completed (worst case), they will be pushed to the next sprint. Each sprint will have a  board on the Gitlab, and the tasks for that sprint will be updated on the corresponding board.  

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
| Obtain required data from different sources           | 1500       |

The application uses data to analyse the traffic volume within the city along with demographic data. Data from these sources has to be combined, and a model has to be trained to process or analyse the data. The efficiency of the application depends upon the quality of the data. So it is essential to obtain data from trusted sources and have plenty of it to support the use cases. These sources may include google API for travel data, onzo, taxi-data, telco and census data for demographic information. Considering the time and the agreement related issues, a data source can be finalised and development can start on the obtained data. The model can be trained further to analyse data from different sources.

#### 5.2.2 Procurement
| Procurement Item                                      | Source            |
| ----------------------------------------------------- |:-----------------:|
| Travel Data                                           | Google Maps API   |
| Demographic Data                                      | Census Data       |
| GIS Tool (open source)                                | QGIS              |

Application maps travel data to estimate the time taken to reach a particular point in map (wellington CBD in this case) from different regions of wellington. The time estimate is calculated for different modes of transport like private (car) and public (bus). Google Maps API will be used to gather data and analysis will be done on top of this data.  

Demographic data from Census 2013 will be used to map the population metrics for different regions of wellington. This will be combined with travel data to identify regions where the time taken to reach the destination as well as the population of that region are quite high. These will be the potential hotspots for improving public transport.

GIS applications are tools that are used to create interactive queries, analyze spatial information, edit data in maps, and present the results of all these operations [4]. Demographic data will be overlaid on the geographic information and analysis will be done using the GIS tool.

### 5.3 Risks

Risks in software development is a potential problem which prevents an individual or a group of people from reaching the project goal [2]. The outcome of these is the possibility of suffering loss, and total risk exposure to a specific project will account for both the probability and the size of the potential loss. 

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

Most software development projects are inherently risky because of the variety of problems that may arise [3]. The severity of certain risks can be mitigated with prior planning and taking necessary precautions.  

| Risks                                                 | Mitigation  |
| ----------------------------------------------------- |:-----------|
| Members are ill at critical times in the project      | Provide knowledge transfer so that everyone is capable of doing a particular task. Documentation is required to understand the functionalities of the application.|
| Frequent changes in project requirements              | Freeze the requirements at the design stage by having frequent interactions with the client. Some degree of requirement change is allowed.   |
| Failure to obtain data from defined sources           | Find open source data that applies to the project and use it if there is any discrepancy in obtaining original data from the client. |
| Miscommunication within the team or with the client   | Clarify understanding with the team member or with the client until it is clear. Use client meetings and team stand-ups effectively. |
| Underestimation of development life cycle             | Invest more time on planning and the design phase. Gather all the requirements from the client at this stage and plan accordingly.  |
| Financial risks to obtain resources                   | Proper planning of the resources with the available budget. Contact the coordinator in case of budget issues.     |
| Failure to arrive at proper budget estimation         | Estimate the budget according to the required resources.        |
| Loss of data or code due to workstation failure       | Frequent commits to the git repository with appropriate commit messages. Commit messages are used to commit from or revert to a particular point.     |
| Gold plating - Decoration before functionalities      | Prioritize the completion of functionalities. Gold plating is required at some level, but only after developing the working product.         |
| Functionalities are not performing as expected            | Write unit test cases and perform functionality tests after completion of each function. Perform integration tests once completing all the necessary functionalities.          |


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
| Occupational overuse syndrome                                 | Mix tasks to avoid long, uninterrupted stretches of using the computer. Remove hands from keyboard and mouse when not actively using them. |
| Earthquake in the lab                                         | Drop, cover and hold until shaking stops. Listen carefully to the earthquake-related announcements and evacuation staff.  |
| Injury while attending a meeting at client office             | Be aware if the client office is in the earthquake prone building. Take safety precautions and attend safety related inductions at the client office.  |
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
