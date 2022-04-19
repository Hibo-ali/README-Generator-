//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "Author",
        message: "Enter author's (your) name:",
      },

    {
        type: 'input',
        message: "Enter a title for your ReadMe:",
        name: 'Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid title is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Enter a description of your ReadMe:",
        name: 'Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section:",
        name: 'Installation'
    },
    {
        type: 'input',
        message: "Enter usage instructions:",
        name: 'Usage'
    },
    {
        type: 'input',
        message: "Enter your Github username:",
        name: 'Contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them:",
        name: 'Tests'
    },

    {
        type: "input",
        name: "Questions",
        message: "Enter email address where you can be reached with questions:",
      },

    {
        type: 'list',
        message: "Choose a license for your Readme:",
        name: 'License',
        choices: [
            "MIT",
            "Apache",
            "Mozilla Public License",
            "Unlicense",
            "Boost Software License",
        ],
    }


];


// function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((userInput) => {
         console.log(userInput);
        fs.writeFile("GeneratedReadMe.md", generateMarkdown(userInput), function (err) {
          if (err) throw err;
          console.log("New file successfully written.");
        });
    })
    .catch((err) => {
        if (err) throw err;
    });
}

init();












