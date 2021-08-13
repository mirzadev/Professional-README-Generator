// TODO: Include packages needed for this application
// node modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatorMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

const questions =
[ {
    type:   'input',
    message: 'What is the project title ?',
    name:   'Title'        
  },
  {
    type:   'input',
    message: 'Description of the project: ',
    name:   'Description'
  },        
  {
    type:   'input',
    message: 'Table of contents: ',
    name:   'Table of Contents'
  },
  {
    type:   'input',
    message: 'How do you install your app ?',
    name:   'Installation'
  },
  
  {
    type:   'input',
    message: 'How do you see your app ?',
    name:   'Usage'
  },
  {
    // list of licenses
    type:   'list',
    message: 'What license did you use ?',
    name:   'License',
    choices: ['The MIT license', 'The GPL license', 'Apache license', 'GMU license', 'N/A']
  },
  {
    type:   'input',
    message: 'What is your GitHub username: ',
    name:   'Username'
  },
  {
    type:   'input',
    message: 'LinkedIn link: ',
    name:   'Linkedin'
  },
  {
    type:   'input',
    message: 'What is your email ? ',
    name:   'Email'
  },
  {
    type:   'input',
    message: 'Contributing: ',
    name:   'Contributing'
  }, 
  {
    type:   'input',
    message: 'What commands are needed to test this app ? ',
    name:   'Tests'
  }, 
  {
    type:   'input',
    message: 'Contact information for inquiries: ',
    name:   'Questions'
  } 
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
       writeToFile("README.md", generatorMarkdown(data));
       console.log(data) 
    })
}



// Function call to initialize app
init();
