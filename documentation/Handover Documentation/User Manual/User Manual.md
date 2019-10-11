# User Manual

**Project 7:** Visualising our Transport Networks<br>
**Client:** Chris Vallyon<br>
**Date:** 11 October 2019<br>

<!-- This document is a guide for how a user will use the application. It should only address the front-end and shouldn't reference the code or the back-end of the application. Should have screenshots and a write up for each screen. -->

## Application Screens

This section provides an overview of each page of the application. It also describes the actions that the user can commit when interacting with each page.

---

### Login

#### Purpose

The Login screen is the first screen that is displayed when the user starts the web application. The screen is used to ensure that the functions of the application are only used by authorised users. If an unauthorised username and password are submitted, the screen will display an error popup. To unlock the functions of the application, the user can enter the username and password as described below. The following credentials are stored in the back-end database of the application:

Username: Project 7  
Password: 12345

#### Navigation

The user cannot commit any actions by interacting with the navigation menu. The only way the user can navigate to the Home screen is to enter the required credentials into the Login form and to then press the 'Log In' button.

#### Interaction Components

- A text field for the username
- A text field for the password
- A button to authenticate the credentials and to navigate to the Home screen

---

### Home

**Navigation Actions**

The user can commit the following actions by interacting with the navigation menu.

- Navigate to the About screen
- Logout of the application and return to the Login screen

---

### About

**Navigation Actions**

The user can commit the following actions by interacting with the navigation menu.

- Navigate to the Home Screen
- Logout of the application and return to the Login screen

`NOTE`  
The following sections is being replaced by the above section.

---

### 3. Description of System Functions

This sections provides an overview of the different functionalities implemented as a part of developing the application.

#### 3.1 User Login

**Description** <br>
Secure usage of the web application was one of the initial requirement of this project. As a part of this requirement, a login feature was developed and integrated, which prompts the user for appropriate username and password. On entering credentials and once authenticated, the user will be able to access the application. An error popup will be displayed if the credentials does not match with the user information on the backend database. <br>

**Function Inputs**

- Text field for user name
- Text field for user password
- A button to authenticate the credentials

**Function Output**

- Correct credentials - users logs in to the application.
- Wrong credentials - user is prompted with a error popup.

#### 3.2 Demographic Information

**Description** <br>
Combining the demographic information with the travel points was another requirement of this project. As a part of this requirement, an information tool was developed to display the population information for the corresponding suburb region. User, on hovering over different regions on map, will be able to see the demographic details associated with that specific region. <br>

**Function Inputs**

- Mouse - Hover over different suburb regions on map.

**Function Output**

- Information tool on map displays demographic information.

#### 3.3 Transport heat map:

**Description** <br>
Visualising the travel time from different regions of the map to the destination - Wellington CBD, is one of the major feature implemented as a part of this application. The Map is seggregated into different regions based on the geographic boundaries of the wellington suburbs. A navigation bar is developed which allows user to query the database based on different time intervals. Based on the user input, the regions are coloured and the user can visualise the traffic congestions of different regions over different time intervals. A legend is added to the bottom left-corner of the map to display the time intervals associated with different colours.<br>

**Function Inputs**

- Dropdowns to select the city, date, from time and to time on the navigation bar.
- A button to start the visualisation on the map.
- A button to reset the map to it's initial state.

**Function Output**

- Regions on the map are coloured based on the travel time.
