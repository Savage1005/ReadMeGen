const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

const questions =[
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
"choices": ["MIT", "APACHE 2.0","GPL", "BSD 3", "None"],
"name":"license",
},
{
"type": "input",
"message": "What command should be run to install dependencies?",
"name": "install",
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
}]


function writeToFile(data) {
   fs.writeFile("README.md", data, function(err){
         if (err) {
           return console.log(err);
            }
           
   });
 };
   

  function init() {
      inquirer.prompt(questions).then(function(data){
          data = generateMarkdown(data)
          writeToFile(data);
      })
    }

   

  init();

