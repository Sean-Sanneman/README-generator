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
  {
    type: "input",
    name: "title",
    default: "My Project",
    message: "Nice to meet you! What is the Title of this project?",
  },
  {
    type: "input",
    name: "description",
    default: "none",
    message:
      "Please enter a detailed description of your project. You may want to include information about what languages/tech were used in the creation of your project, or what inspired you to build it, etc.",
  },
  {
    type: "input",
    name: "installation",
    default: "none",
    message:
      "How can people install your project? Please provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    default: "none",
    message:
      "Please provide instructions and examples for use. This would be a good place to add screenshots if you like.",
  },
  {
    type: "input",
    name: "credits",
    default: "none",
    message:
      "Please provide a list of who contributed to this project, and include links to their GitHub profiles. If you used any third party assets that require attribution, make sure you list them along with a link to their web page.",
  },
  {
    type: "input",
    name: "rights",
    default: "MIT License",
    message: "What kind of license is this project released under?",
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
      console.log("Sit tight, crunch, crunch, crunch...");
      writeToFile("README.md", generateMarkdown({ ...response }));
    });
}

// function call to initialize program
init();
