# Final Project Report

**Project 7:** Visualising our Transport Networks<br>
**Client:** Chris Vallyon<br>
**Date:** 11 October 2019<br>

<!-- _This is not expected to be a long report and volume will not be rewarded! The purpose of the final report is to summarise and document anything within your project and other documentation that is tacit or implicit, and any assumptions or motivations which can't_ easily _be found elsewhere in your hand-over documentation. If you wish to follow the form of the example final report in the textbook, then you are welcome to do so. **This is primarily a client-facing document.**_

_All text in italics in this template should be replaced by your answers (in regular font). This introductory paragraph should be deleted._ -->

#### Project Objective(s)

<!-- _A short statement, 1-3 sentences, of project objective(s); a short abstract of project goals. Simply repeating the original description of the project from ENGR 301, or providing a bland and repetitive description is a waste of everyone's time. What is expected here is a summary of the project objectives as embodied in the_ as-delivered _project._ -->

In ENGR301 and ENGR302 courses at Victoria University of Wellington, the team was tasked to develop a web application to visualise the network flow into major cities. The application was built to support planning and decisions around any changes to city transport networks.

#### Summary of Project Results

<!-- _A statement, summarising the results of the project; what resulted from project execution. This should convey to the reader those aspects of the project results which are not obvious from other documents._ -->

The project results are a web application that shows a visualisation of the traffic congestion in the Wellington City Council area for different periods in a day. Alongside project delivery, the team collectively learned about an agile way of working while developing project management skills.

#### Original and Delivered Scope

<!-- _The things that are within the scope of the delivered project; the things that the delivered project can do. This should convey to the reader those aspects of the project results which are not obvious from other documents. If the project has a significant Issue backlog on delivery, a summary of the pending features, why these features were not completed and how they could be picked up by others if project work was to resume._ -->

**Original Scope**

The Visualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data. The system should be able to run on any browser. It will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken against the distance from the origin. Users can add CSV data sets to the application to display the information.

The goal is to deliver a web application which will display a terrain topographic map which shows how long it takes to get into the city from different sections of a region using different modes such as cars, trains and buses. Another aim is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of the display analysis and apply users to make insight-driven decisions made in the transport sector. The regions will, therefore, adapted to show census regions, rather than the set distance zones it currently is. This would make it more useful for consultants as decisions can be made dependent on different and specific socio-economic groups.

**Delivered Scope**

A more focused subset of the original scope has been delivered. The delivered, 'Visualising our Network Transports' application runs on a web browser. The application allows users to see the traffic congestion points in different suburbs as displayed by the coloured heat map. Users can filter the visualisation by the time of day and can click and hover on different suburbs to see population information based on the area. Therefore, the application can still be used as a decision support tool as it does visualise the traffic congestion in the Wellington City Council area of governance. It displays an observation of how long it takes to get to the origin point in the CBD and is coloured based on an interpolation of the time taken against the distance from the origin point. A database has been implemented for it to be easier to add newer data sets into the application.

**Backlogged Features**
`TO BE COMPLETE`

#### Original and Actual Schedule

<!-- _A summary of the original timelines and a summary of deviations from the original plan. This should convey to the reader those aspects of the project results which are not obvious from other documents._ -->

In trimester one, the team planned sprints ahead of time with the support of a sprint planning game. This meant the team had an effective roadmap planned before the start of each sprint. However, as the team had set deadlines that were compulsory for ENGR301 and ENGR302; such as the requirements and the architecture documents, we did not plan around these deadlines in the timeboxing for the sprints. The team also overestimated the time it would take to complete certain issues and were behind on set deadlines.

Another reason for having deviated from the set product goals was that we were undertaking the project with new knowledge of project management skills and was developed parallel to other courses with their own set of deadlines. As we came into the second half of the project timeline, the team collectively became better at time estimation with more experience. However, this late meant that we were behind on projected outputs.

Furthermore, there were further delays due to a miscommunication with the client concerning the use of mesh block regions versus area unit regions. Area unit regions were also not the most applicable to the application and so the team had to instead source GeoJSON points for suburb areas. This meant that the disaggregation of the map regions took longer than expected.

Overall, the team attempted to stick to the schedule as best as possible, however, the team's lack of project management experience and the effects of unforeseen risks set the team behind schedule. The team's last few weeks of the project served as the having the most visible progress for the client. Ideally, the progress should have occurred earlier and due to this increase in work the handover documentation and actual product was rushed nearing project closing.

#### Delivered Expenditure

<!-- _How much was spent, as a single number. If there has been a deviation from the original plan then this should be explained in summary. Projects with no expenditure should state “No expenditure” for this section._ -->

| Product           | Reason                                                                                                             | Time                      | Cost                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------- | --------------------------------------------------------------- |
| Heroku Hobby Dyno | This was used so the application could be deployed so that the user would be able to see changes as they occurred. | 5th August - 5th November | \$32.32 NZD (based on the conversion rate on the 5th of August) |

#### Project Self-Assessment

_A short statement of the team’s assessment of the delivered project, with a focus on the technical aspects. This should convey to the reader those aspects of the project results which are not obvious from other documents._

#### Lessons Learned

<!--
_Lessons learned which are of significance, impact and priority to the client. The focus here is on the lessons learned at the intersection of the technical and management aspects of your project which are relevant to the client. Projects which have encountered significant technical or non-technical issues which will be of particular relevance to the client or the client's organisation should document these in this section._ -->

This section covers the lessons-learned which are of significance and priority to the client. The focus here is on the lessons learned at the intersection of the technical and management aspects of the team's delivered product which are relevant to the client. A breakdown of the lessons-learned are below and fall into three primary categories; management, communication, and deployment.

**Did the project meet goals** <br>
The team did not meet the original scope, however, the focused subset of the original scope, which was determined in client-team meetings, was successfully met. In terms of time management, it was difficult in the beginning for the team to meet deadlines, but we learnt to re-evaluate deadlines as we progressed with the project.

**Did we meet the project success criteria listed in the scope statement?** <br>
Yes, we managed to implement the list of features for the delivered scope.

**In terms of managing the project, what were the main lessons your team learned from this project?** <br>
Even though the team was new to the concept of agile project management, we felt that we should have better-managed project requirements earlier on. We also felt that resource procurement should have been prioritised. This would have meant us attempting to involve the stakeholders earlier when making project decisions. It also would have aided in minimising the scope and in sourcing the data resources we needed to have more noticeable outputs for the client.

**Describe one example of what went right on this project?** <br>
Pre-booking client meetings helped to push internal team goals in order to deliver scope progress each meeting. The original scope description was downsized by many features so that the team could have a reasonable delivered product which arose due to the team managing this project parallel to other courses. Pair programming in the second half of the project helped with internal knowledge sharing and integration of the different parts of the application.

**Describe one example of what went wrong on this project?** <br>
Collectively the team would have benefited from starting deployment earlier as it took much longer than we anticipated and having had the deployment in place would have been effective to receive better feedback from the client. Risks should have also been better managed as they were not evaluated often and it would have perhaps been advantageous for the team to use a risk board. GitLab boards could have been used better in terms of issue commenting and time estimation and time boxing.

**What surprises/shortcomings did the team have to deal with?** <br>
The team did not account for the risk that the Heroku deployment could exceed the memory allocation associated with our subscription plan. As a result of this, the deployment process took too long. This would have been mitigated with a more effective risk plan.

**What project circumstances were not anticipated?** <br>
A team member leaving and another team member joining the team was not anticipated by the team. That said, this did not affect us negatively as the new member integrated themselves concisely and quickly.

**Describe what you will do differently on the next project based on your experience working on this project?** <br>
For the management aspect, the team collectively agrees that having more frequent planning games in the future so we can refresh the issues each sprint would benefit us, as at a point with this project, the backlog was too old. Issues will also be broken down more to time box effectively. Increased knowledge sharing will occur earlier by the process of having more frequent stand-ups and pair/mob programming sessions.

In a more technical aspect, the team will focus on having deployment done earlier in the future to have more client feedback in order to maintain the delivery of a stronger final product.

#### Procurement Summary

<!-- _A description of procurements, naming major suppliers, stating where to find the procurement information in the project documents and flagging any unclosed procurements. Projects with no procurements should state “No procurements” for this section._ -->

---

| Product          | Reason                                                                                                                                     | Source                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Heroku Server    | This was used so the application could be deployed so that the user would be able to see changes as they occurred.                         | Heroku                  |
| Leaflet Library  | This is an open-source javascript library which was used for the interactive map feature.                                                  | Leaflet                 |
| Suburb Areas     | These points were used to disaggregate the areas on the map in order to display demographic information relevant to the travel population. | Wellington City Council |
| Spring Libraries | This is an open-source library used for the connection with the frontend in the backend.                                                   | mvn repository          |
| Travel Data      | This is the data supplied to us by the client in order to visualise the information on the map.                                            | Google Maps API         |
