// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const genMarkdown = require('generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'title',
            message: 'What is your application called?',
        },
        {
            type:'input',
            name: 'description',
            message: 'What does this application do?',
        },
        {
            type:'input',
            name: 'usage',
            message: 'What usage does this application provide?',
        },
        {
            type:'input',
            name: 'gitHub',
            message: 'What is your gitHub username?',
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type:'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Harvard', 'GT'],
        },
        {
            type:'input',
            name: 'install',
            message: 'How do I install this application?',
        },
    ]);
};
console.log(questions);

// TODO: Create a function to write README file
const writeToReadMeFile = (input) =>
`#${input.title}
## Description
--${input.description}

## Table of Contents
[Description](#description)

[Usage](#usage)

[Install](#install)

[Contact-Info](#contact-info)
## Usage
--${input.usage}
## Install
--How to install the application.

--${input.install}
## Contact-Info
--gitHub Username:${input.gitHub}

--Email:${input.email}`

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
