# Visualising Our Transport Networks

This repository contains issues, boards, and documents relating to project planning and requirements.

## How to Run the Web Application

### `npm start`

Clone this repo and then navigate to the root of the repository. In the terminal, run the `npm start` command to install all of the dependencies needed to run the web application. This command works by first installing all of the required dependencies, then it navigates into the `code/client` folder and executes the `npm install` command to install any devDependencies, and then lastly, it runs the `react-scripts start` command as described in the `scripts` object of the `code/client` package.json file.

In the console, you can expect to encounter several warning messages. These are due to certain packages either requiring others or needing to be updated. Once the `react-scripts start` command is run, the development server should start. There should be no need to run any other commands to start the web application.

## Heroku Link

https://visualising-transport-networks.herokuapp.com/

## Troubleshooting

If the `npm start` command doesn't work then you may need to install Node.js to your system. The following address is a link to the download page for Node.js:

https://nodejs.org/en/download/

Otherwise you may need to ensure that you are at the correct level of the project directory. You should navigate to the root of the project. The address should be similar to either of the addresses shown below:

`C://.../visualising-our-transport-networks`  
`/Users/.../visualising-our-transport-networks`
