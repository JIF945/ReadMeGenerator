// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const { default: Choices } = require("inquirer/lib/objects/choices");
// const generateMarkdown = require("./utils/generateMarkdown");


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
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: ' provide instructions and examples for use'
    },
    {
        type: 'input',
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
 function writeToFile(generateMarkdown, questions) {
    fs.writeFile(generateMarkdown, questions, (err, data) => {
        console.log('READme.md file has been created "just dont know where yet"');
    })
 }
 function generateMarkdown(answers) {
    //   // Create the markdown content based on the answers
    // Return the generated markdown content as a string
    return`
    # ${answers.Title}
    # ${answers.Motivation}
    # ${answers.Reason}
    # ${answers.Solution}
   # ${answers.Skills}
    # ${answers.Special}
    # ${answers.Installation}
    # ${answers.Usage}
    # ${answers.Credits}
    # ${answers.License}
   ` ;
}



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
    console.log(answers)
    writeToFile('./generatedFile/README.md', generateMarkdown(answers))
    });
}

// Function call to initialize app
init();



// First, you need to create a function that generates the markdown content for the README based on the user's answers. This function will take the answers object as input and return the generated markdown string. Let's call this function generateMarkdown.


// function generateMarkdown(answers) {
// //   // Create the markdown content based on the answers
// // Return the generated markdown content as a string
// return`
// # ${answers.Title}
// # ${answers.Motivation}
// # ${answers.Reason}
// # ${answers.Solution}
// # ${answers.Skills}
// # ${answers.Special}
// # ${answers.Installation}
// # ${answers.Usage}
// # ${answers.Credits}
// # ${answers.License}
// ` ;
// }


// 



// • Create another function, let's call it writeToFile, that takes the README content (markdown) and writes it to a file. In this case, you are using Node.js fs.writeFile function to write the content to a file named "ReadMe.md".
// Function: writeToFile
// Input: README (string), answers (object)

// 1. Start
// 2. Open the file 'ReadMe.md' for writing.
// 3. Write the contents of the 'README' string to the file.
// 4. If there is an error while writing the file, do the following:
//     a. Print the error message to the console using 'console.error'.
// 5. Otherwise, do the following:
//     a. Print "Write file success!" to the console using 'console.log'.
// 6. End

// • In the init() function, use inquirer.prompt to ask the questions to the user and get their answers. Once you have the answers, call the generateMarkdown function passing the answers to it to generate the markdown content.
// Function: init

// 1. Start
// 2. Ask the user a series of questions using 'inquirer.prompt' function, using the 'questions' array defined earlier.
// 3. Wait for the user to answer the questions.
// 4. When the user provides answers, do the following:
//     a. Save the user's answers in the 'answers' variable.
//     b. Generate the markdown content for the README by calling the 'generateMarkdown' function with the 'answers' object as an argument. Store the generated markdown content in the 'readmeContent' variable.
//     c. Call the 'writeToFile' function with 'readmeContent' and 'answers' as arguments to write the README file.
// 5. End

// • Finally, call the writeToFile function and pass the generated markdown content and answers as arguments to write the README file.

