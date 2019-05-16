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

There are significant changes to the specific requirements within the User Interface and Software Interface.

For changes regarding the user interface, there will be extra graph functionality added; the graph can be used in conjunction with the animation, if selected by the user, and its axis will consist of average travel time in minutes to or from the city centre over time of day, which directly reflect the user's given parameter for animation length. This change has been added as the user has requested this feature be added to our system as this tool will further allow ease of analysis by identifying peaks and troughs.

For changes regarding the software interface, previous requirements stated that data would be stored as CSV files in different sub-directories on the user's local system. The change to this specific requirement is that the given data will no longer be stored in the user's local system but instead, stored in a remote database - as a result the system no longer has to read or parse the CSV files per each request from the user, instead, data will only need to be loaded once and the system will query the database for the specified data. There will be different tables in the database for the different given types data however, the format of the query string will stay the same - this way, the use of a parser will no longer be required to read the different data formats. The purpose of the software interface will now be to retrieve data by querying the database, process the data and diplay the data onto the user interface. This change has been made to the specifications as this will clearly set apart our system to having a front end and a back end - allowing for a clear breakdown of the structure of the system as well as packages, layers and processes that our system will use.

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
