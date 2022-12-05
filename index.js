// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the Title of your Project?",
        type: "input"
    },
    {
        name: "github",
        message: "What is your Github Username?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your Email Address?",
        type: "input"
    },
    {
        name: "description",
        message: "Provide a short description of your porject. Hint: What was your motivation? What problem does it solve? What did you learn?",
        type: "input"
    },
    {
        name: "installation",
        message: "Provide a step by step description of how to install your porject",
        type: "input"
    },
    {
        name: "usage",
        message: "Provide instructions and examples of how your project will be used. Screenshots will also need to be included here",
        type: "input"
    },
    {
        name: "credits",
        message: "List your collaborators, third party asset creators and links to any tutorials used in creating your project",
        type: "input"
    },
    {
        name: "license",
        message: "What license type is your project using?",
        type: "list",
        choices: ["None","Apache","GNU","MIT","BSD","Boost","Creative Commons","Eclipse"]
    },
    {
        name: "tests",
        message: "Explain how users could test your application",
        type: "input"
    },
    {
        name: "questions",
        message: "Provide instructions on how to contact you with questions. Your email and github username will automatically be included in this section",
        type: "input"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Success!")
    );
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
    .then(()=> console.log('Sucess!'))
    .catch((err) => console.error(err));
 }

// Function call to initialize app
init();
