# Final Project Report

**Project _7_:** _Visualising our Transport Networks_<br>
**Client:** _Chris Vallyon_<br>
**Date:** 11 October 2019<br>

<!-- _This is not expected to be a long report and volume will not be rewarded! The purpose of the final report is to summarise and document anything within your project and other documentation that is tacit or implicit, and any assumptions or motivations which can't_ easily _be found elsewhere in your hand-over documentation. If you wish to follow the form of the example final report in the textbook, then you are welcome to do so. **This is primarily a client-facing document.**_

_All text in italics in this template should be replaced by your answers (in regular font). This introductory paragraph should be deleted._ -->

#### Project Objective(s)

<!-- _A short statement, 1-3 sentences, of project objective(s); a short abstract of project goals. Simply repeating the original description of the project from ENGR 301, or providing a bland and repetitive description is a waste of everyone's time. What is expected here is a summary of the project objectives as embodied in the_ as-delivered _project._ -->

In ENGR301 and ENGR302 courses at Victoria University of Wellington, the team was tasked to develop a web application in order to visualise the network flow into major cities. The application was built to support planning and decisions around any changes to city transport networks.

#### Summary of Project Results

<!-- _A statement, summarising the results of the project; what actually resulted from project execution. This should convey to the reader those aspects of the project results which are not obvious from other documents._ -->

The project results are a web application that shows a visualisation of the traffic congestion in the Wellington City Council area for different periods in a day. Alongside project delivery, the team collectively learned about an agile way of working while developing project management skills.

#### Original and Delivered Scope

<!-- _The things that are within scope of the delivered project; the things that the delivered project can do. This should convey to the reader those aspects of the project results which are not obvious from other documents. If the project has a significant Issue backlog on delivery, a summary of the pending features, why these features were not completed and how they could be picked up by others if project work was to resume._ -->

**Original Scope**

The Visualising our Transport Networks App is a decision support tool designed to allow transport planners, road control authorities and public transport operators gain insight on effective transport decisions which support the existing network pathways by a visual analysis of the transport flow data. The system should be able to run on any browser. It will display an observation on how long it takes to get to the CBD from a set origin on a map, where the zones between the origin and destination will be coloured based on an interpolation of the time taken against the distance from the origin. Users can add CSV data sets to the application in order to display the information. The goal is to deliver a web application which will display a terrain topographic map which shows how long it takes to get into the city from different sections of a region using different modes such as cars, trains and buses. Another aim is for the map to use the same units as Statistics New Zealand's census data units to further increase the effectiveness of the display analysis and apply users to make insight-driven decisions made in the transport sector. The regions will, therefore, adapted to show census regions, rather than the set distance zones it currently is. This would make it more useful for consultants as decisions can be made dependent on different and specific socio-economic groups.

**Delivered Scope**

The delivered product is a web application which runs on browsers, and allows users to use it to see the congestion points in different suburbs by the use of a coloured heat map. Users are able to filter the time periods and can click and hover on different suburbs to see population information based on the area. Therefore, this Visualising our Transport Networks app can still be used as a decision support tool as it does visualise the congestion in the Wellington City Council area of governance. It will display an observation on how long it takes to get to the origin in the CBD and will be coloured based on an interpolation of the time taken against the distance from the origin. A database has been implemented in order for it to be easier to add newer data sets into the application.

A more focussed subset of the original scope has been delivered.

**Backlogged Features**

#### Original and Actual Schedule

<!-- _A summary of the original timelines and a summary of deviations from the original plan. This should convey to the reader those aspects of the project results which are not obvious from other documents._ -->

The team planned sprints prior to them actually occurring in semester one with the support of a sprint planning game. This meant we had an effective roadmap planned ahead of us. However, as we had set due dates that were compulsory for the course; such as the requirements and architecture documents, we did not effectively plan around them in our planning. We also overestimated the time it would take to complete certain issues, and were behind on set deadlines.

Another reason for deviation of set product goals was that we were doing this with a new knowledge of project management skills and this project has been developed parallel to other courses with other deadlines. As we came into the second half of the project timeline, the team collectively became better at time estimation with more experience. However, this late meant that we were behind on projected outputs.

Furthermore, there was miscommunication with the client surrounding the use of meshblocks versus area units, which in turn delayed us. Area units also were not the most applicable to our application, so we had to find geojson points for suburb areas ourselves. This meant that our disaggregation of the map took longer than expected.

Overall, we attempted to stick to the schedule as best we could, but our lack of experience and the effects of unplanned risks set us behind. During our last few weeks, we had the most visible progress for our client in the application, and ideally this should have happened earlier, but due to this pick up in visible work, our handover documentation and actual product was a bit rushed nearing closing.

#### Delivered Expenditure

<!-- _How much was spent, as a single number. If there has been deviation from the original plan then this should be explained in summary. Projects with no expenditure should state “No expenditure” for this section._ -->

| Product           | Reason                                                                                                             | Time                      | Cost                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------- | --------------------------------------------------------------- |
| Heroku Hobby Dyno | This was used so the application could be deployed so that the user would be able to see changes as they occurred. | 5th August - 5th November | \$32.32 nzd (based on the conversion rate on the 5th of August) |

#### Project Self-Assessment

_A short statement of the team’s assessment of the delivered project, with a focus on the technical aspects. This should convey to the reader those aspects of the project results which are not obvious from other documents._

**THIS WILL BE DONE AFTER CLIENT MEETING**

#### Lessons Learned

<!--
_Lessons learned which are of significance, impact and priority to the client. The focus here is on the lessons-learned at the intersection of the technical and management aspects of your project which are relevant to the client. Projects which have encountered significant technical or non-technical issues which will be of particular relevance to the client or the client's organisation should document these in this section._ -->

This section covers the lessons learned which are of significance impact and priority to the client. The focus here is on the lessons-learned at the intersection of the technical and management aspects of Project 7's product which are relevant to the client. A breakdown of the lessons learned are below and fall into three primary categories; management, communication, and deployment.

**Did the project meet goals**
The team did not meet the original scope, however, the one that was minimised in meetings was met. In terms of goals with time, it was rough in the beginning for us to keep with deadlines, but we re-evaluated time as we went further into the project.

**Did we meet the project success criteria listed in the scope statement?**
Yes, we managed to get the functionality for the delivered scope.

**In terms of managing the project, what were the main lessons your team learned from this project?**
Even though we were new to the whole concept of agile project management, we collectively felt as though we should have managed project requirements earlier on, and resource procurement should have been prioritised. This involved all of us attempting to involve the stakeholders earlier into project decisions in order to minimise the scope and get the resources in order to have more noticeable outputs for the client.

**Describe one example of what went right on this project?**
Pre-booking client meetings helped to push internal team goals in order to deliver progress each meetings. Scope description was downsized a lot in order to have a reasonable deliverable as the team was managing this parallel to other courses. Pair programming in the second half of the project helped with internal knowledge sharing and integration of the different parts of the application.

**Describe one example of what went wrong on this project?**
Collectively the team would have benefited from starting deployment earlier as it took too long and we it would have been good to get concise project feedback from the client. Risks should have also been better managed as they were not evaluated very often and it would have perhaps been advantageous for the team to use a risk board. Gitlab boards could have been used better in terms of issue commenting and time estimation and time boxing.

**What surprises/shortcomings did the team have to deal with?**
The team did not take into account the risk of our deployment server running out of room. Therefore, this deployment too far too long. This would have been mitigated with a more effective risk plan.

**What project circumstances were not anticipated?**
A team member leaving and another team member joining the team was something that was not anticipated by the team. However, this did not effect us negatively.

**Describe what you will do differently on the next project based on your experience working on this project?**
For the management aspect, the team collectively agrees that having more frequent planning games in the future so we can refresh the issues each sprint would benefit us, as at a point with this project, the backlog was too old. Issues will also been broken down more to time box effectively. Increased knowledge sharing will occur earlier by the process of having more frequent stand-ups and pair/mob programming sessions.

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
