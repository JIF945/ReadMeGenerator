// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'what is the title of your project'

    },
    {
        type: 'input',
        name: 'Motivation',
        message: 'What is your Motivation?'

    },
    {
        type: 'input',
        name: 'Reason',
        message:'why did you build this project'
    },
    {
        type: 'input',
        name: 'Solution',
        message: 'what problem does it solve?',

    },
    {
        type: 'input',
        name: 'Skills',
        message: 'what did you learn'
    },
    {
        type: 'input',
        name: 'Special',
        message: 'what makes your project stand out',
    },
    {
        type: 'editor',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'editor',
        name: 'Usage',
        message: ' provide instructions and examples for use'
    },
    {
        type: 'editor',
        name: 'Credits',
        message: " list collaborators, third party assets or tutorials used to to make this project. "
    },
    {
        type: 'input',
        name: 'License',
        message: 'List any license used for the project if you are unsure refer to (https://choosealicense.com/)',
        Choices: ['none', 'mit', 'GNU', 'Apache', 'moxilla',]
    }

];



// TODO: Create a function to write README file
function writeToFile(README, answers) {
    fs.writeFile('ReadMe.md',answers, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Write file success!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
    });
}

// Function call to initialize app
init();