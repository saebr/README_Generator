// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Enter your project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description for your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions for your project',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter useage information for your project:',
        name: 'useage',
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines for your project',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter test instructions for your project',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose from the list of licenses',
        choices: ['BSD', 'MIT', 'GPL'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
      },
  ];

function template(data) {
return (`# ${data.title}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation 

${data.installation}

## Useage

${data.useage}

## Contribute

${data.contribution}

## Tests

${data.test}

## Questions
Email: ${data.email}

GitHub: https://github.com/${data.github}

## License

${data.license}
 `)
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err)
      return
    }}
);}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        {writeToFile('./GeneratedREADME/README.md', template(response) ) })}

// Function call to initialize app
init();
