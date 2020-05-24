var inquirer = require("inquirer");
var fs = require("fs");

//const questions = 

inquirer.prompt([
{"type": "input",
"message": "What is your Github username?",
"name":"username",
},
{
"type": "input",
"message": "What is your email?",
"name":"email",
},
{
"type": "input",
"message": "What is the URL to your project?",
"name":"url",
},
{
"type": "input",
"message": "What is your project's name?",
"name":"title",
},
{
"type": "input",
"message": "Please write a brief description of your project",
"name": "description",
},
{
"type": "list",
"message": "What type of license should your product have?",
"choices": ["MIT", "APACHE 2.0","GPL 3.0", "BSD 3", "None"],
"name":"license",
},
{
"type": "input",
"message": "What command should be run to install dependencies?",
"name": "dependencies",
},
{
"type": "input",
"message": "What command should be run to run tests?",
"name": "tests",
},
{
"type": "input",
"message": "What does the user need to know about using the repo?",
"name": "repo",
},
{
"type": "input",
"message": "What does the user need to know about contributing to the repo?",
"name": "contribute",
},
])
.then(function (answers){
    console.log(answers);
})

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
