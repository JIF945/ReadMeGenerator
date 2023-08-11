// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string  (table of contents in read me )
function renderLicenseLink(license) {
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string   ( link to sections in read me)
function renderLicenseSection(license) {
  return``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## motivation
 ${data.motivation}
## Reason
 ${data.Reason}

${renderLicenseBadge(data.license)}



`;
}

module.exports = generateMarkdown;

