const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    // TITLE
    {   type: 'input',
        name: 'title',
        message: 'What is the TITLE of your Project?' },
    // DESCRIPTION 
    {   type: 'input',
        name: 'description',
        message: 'Provide a brief DESCRIPTION of your project' },
    // INSTALLATION INSTRUCTIONS 
    {   type: 'input',
        name: 'install',
        message: 'Provide INSTALLATION INSTRUCTIONS' },
    // USAGE
    {   type: 'input',
        name: 'usage',
        message: 'Provide USAGE information for your project'},
    // GUIDELINES
    {   type: 'input',
        name: 'contribution',
        message: 'Provide CONTRIBUTION GUIDELINES for your project'},
    // TEST INSTRUCTIONS
    {   type: 'input',
        name: 'test',
        message: 'Provide TEST insctructions for your project'},
    // LICENSE
    {   type:'checkbox',
        name: 'license',
        message: 'Provide a LICENSE from the choices below',
        choices: ['MIT', 'Apache', 'GNU', 'None']},
    // GITHUB USERNAME
    {   type: 'input',
        name: 'github',
        message: 'Please enter GITHUB USERNAME'},
    // EMAIL ADDRESS
    {   type: 'input',
        name: 'email',
        message: 'Please enter your EMAIL'}
        // questions/ on how to reach me 
];



function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (error) => {
            if (error){
                return console.log(error);
            }
            else {
                console.log('Successfully generated README!')
            }
        })
    }

function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
        });
    }

init();



