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


## motivation
 ${data.motivation}


 ## Table of Contents

 * [reason](#reason)




## reason
 ${data.reason}
 ## solution
 ${data.solution}





${renderLicenseBadge(data.license)}



`;
}

module.exports = generateMarkdown;

