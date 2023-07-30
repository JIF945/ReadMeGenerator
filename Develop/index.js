// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Motivation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'why did you build this project',
        name: 'the why'
    },
    {
        type: 'input',
        message: 'what problem does it solve?',
        name: 'what'
    },
    {
        type: 'input',
        message: 'what did you learn',
        name: 'learned'
    },
    {
        type:'input',
        message: 'what makes your project stand out',
        name: 'stand out'
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require("os");

// Questions for user
// name, location, bio, LinkedIn URL, and GitHub URL
// const questions = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your location?',
//         name: 'location'
//     },
//     {
//         type: 'input',
//         message: 'Give us a brief bio:',
//         name: 'bio'
//     },
// ];

// // Prompt user with questions
// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         // Use answers to write HTML
//         const html = getHtml(answers);

//         fs.writeFile('bio.html', html, (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("Write file success!");
//             }
//         });
//     });

// const getHtml = (answers) => {
//     const { name, location, bio } = answers;

//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- ADD BOOTSTRAP HERE -->
//     <title>Developer Bio</title>
// </head>
// <body>
//     <h1>${name}</h1>
//     <p>${location}</p>
//     <p>${bio}</p>
// </body>
// </html>
// `;
// }