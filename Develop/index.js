// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the application installed?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How is the application used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribut to this application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How is this application tested?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
         message: 'what is your email?',
    },
    {
        type: 'list',
        message: 'Please select which license you would like to use: ',
        name: 'license',
        choices: ['Boost Software License 1.0', 'clipse Public License 2.0', 'MIT', 'The Unlicense', 'zLib License', 'ISC']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
}

// Function call to initialize app
init();
