// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Proj Title",
        message: "What is the Title of your Project?",
        type: "input"
},
{
    name: "Github Username",
    message: "What is your Github Username?",
    type: "input"
},
{
    name: "email",
    message: "What is your Email Address?",
    type: "input"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
