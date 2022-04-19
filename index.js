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










