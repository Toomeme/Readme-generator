//Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

//Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project's title?",
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your project's name!");
            return false;
          }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
        validate: descInput => {
          if (descInput) {
            return true;
          } else {
            console.log('Please enter the description!');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process for your project: ",
        validate: instInput => {
          if (instInput) {
            return true;
          } else {
            console.log('Please describe the installation process!');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project's usage?",
        validate: useInput => {
          if (useInput) {
            return true;
          } else {
            console.log('Please describe the usage for this project!');
            return false;
          }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please Chose the license for this project: ",
        choices: [
            "Apache",
            "GPLv3",
            "ISC",
            "MIT",
            "MPL",
            "WTFPL",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this project?",
        validate: contInput => {
          if (contInput) {
            return true;
          } else {
            console.log('Please list the contributors!');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any tests included:"
    },
    {
        type: "input",
        name: "questions",
        message: "Please create an FAQ: "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: ",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
    }
  ];

// write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
function promptUser(){
    return inquirer.prompt(questions)
};

function init() {
        // Ask user questions and generate responses
        promptUser()
        .then(data => {
            return generateMarkdown(data);
          })
          .then(pageMD => {
            return writeToFile(pageMD);
          })
          .then(writeFileResponse => {
            console.log(writeFileResponse);
          })
          .catch(err => {
            console.log(err);
          });
  
}


// Function call to initialize app
init();