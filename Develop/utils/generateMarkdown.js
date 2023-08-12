// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string  (table of contents in read me )
function renderLicenseLink(license) {
  if(license === 'none'){
    return '';
  }
  return `https://choosealicense.com/${license}`;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string   ( link to sections in read me)
function renderLicenseSection(license) {
  if(license === 'None'){
    return '';
  }
  return`${license}`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 # ${data.title}

  
 ## About
 ${data.about} 



 ## Table of Contents
 * [About](#about)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)
 * [Contact](#contact)



 ## Installation
 ${data.installation}



 ## Usage
 Click the video link for usage. 
 ${data.usage}



 ## Credits
 ${data.credits}



 ## Contact
 To contact me about this project i can be reached at
 * Email:   
 ${data.email}
 * Github:   
 ${data.github}




 ## license
 ${renderLicenseBadge(data.license)}



`;
}

module.exports = generateMarkdown;

