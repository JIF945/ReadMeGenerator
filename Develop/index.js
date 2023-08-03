// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project'

    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What is your Motivation?'
        
    },
    {
        type: 'input',
        name: 'the why',
        message: 'why did you build this project'
    },
    {
        type: 'input',
        name: 'solution',
        message: 'what problem does it solve?',
        
    },
    {
        type: 'input',
        name: 'skills',
        message: 'what did you learn'
    },
    {
        type:'input',
        name: 'special',
        message: 'what makes your project stand out',   
    },
    {
        type: 'editor',
        name: 'installation',
        message:'What are the steps required to install your project?'
    },
    {
        type: 'editor',
        name: 'usage',
        message:' provide instructions and examples for use'
    },
    {
        type: 'editor',
        name: 'Credits',
        message: " list,  collaborators, third party assets or tutorials used to to make this project. " 
    },
    {
        type: 'input',
        name: 'License',
        message: 'List any license used for the project if you are unsure refer to [https://choosealicense.com/](https://choosealicense.com/)'
    }

];

.prompt(questions)
.then((answers) => {
    const README = generateMarkdown(answers);
})

// TODO: Create a function to write README file
function writeToFile('README.md', generateMarkDown(questions),(err)  => {
    fs.writeFile('READme.md',)
    if(err) {
        console.error(err);
    }else {
        console.log("Write file success!");
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();