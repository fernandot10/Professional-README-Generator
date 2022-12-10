// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    // TITLE
    {   type: 'input',
        name: 'title',
        message: 'What is the TITLE of your Project?' },
    // DESCRIPTION 
    {   type: 'input',
        name: 'name',
        message: 'Provide a brief DESCRIPTION of your project' },
    // USAGE
    {   type: 'input',
        name: 'usage',
        message: 'Provide USAGE information for your project'},
    // GUIDELINES
    {   type: 'input',
        name: 'guidelines',
        message: 'Provide CONTRIBUTION GUIDELINES for your project'},
    // TEST INSTRUCTIONS
    {   type: 'input',
        name: 'test',
        message: 'Provide TEST insctructions for your project'},
    // LICENSE
    {   type:'checkbox',
        name: 'license',
        message: 'Provide a LICENSE from the choices below',
        choices: ['Apache License 2.0','MIT','ISC','GNU','NONE']},
    // GITHUB USERNAME
    {   type: 'input',
        name: 'github',
        message: 'Please enter GITHUB USERNAME'},
    // EMAIL ADDRESS
    {   type: 'input',
        name: 'email',
        message: 'Please enter your EMAIL'},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
