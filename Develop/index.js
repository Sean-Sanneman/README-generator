const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "Hello, what is your github username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)

    // getting response

    .then((response) => {
      console.log("Sit tight, crunch, crunch.");
      writeToFile("README.md", generateMarkdown({ ...response }));
    });
}

// function call to initialize program
init();
