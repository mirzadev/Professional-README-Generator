// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub License](https://img.shields.io/badge/license-$%7Blicense%7D-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
   return `[License](#license)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Brought to you by ${license}
    `
   }
   return '';
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.Username}/${data.Title}
## Description
  ${data.Description}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Username](#username)
  * [LinkedIn](#linkedin)
  * [E-mail](#email)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
## Installation
The following necessary dependencies must be installed to run the application:  ${data.Installation}  
## Usage
Main usages for this app will be:  ${data.Usage}
## License
The project is licensed under:  ${data.License}.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
## Username
My Username in GitHum is: ${data.Username}
## Linkedin
My LinkedIn ID is: ${data.Linkedin}
## Email
I can be reached at: ${data.Email}
## Contributing
If you want to contribute to this application -  ${data.Contributing}
## Tests
test: ${data.Tests}
## Questions
If you have any questions about the repo or concern please contact me at my  ${data.Questions}

`;
}

module.exports = generateMarkdown;
