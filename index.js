const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')


const questions = [
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'Why',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    },
    {
        type: 'input',
        name: 'problems',
        message: 'What problems did you solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'stand_out',
        message: 'What makes your project stand out?'
    }
]
///Write ReadMe File
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log("Success")
    });
};


  // TODO: Create a function to initialize app
  function init() {
      inquirer.prompt(questions).then(function (userInput) {
    writeToFile("README.md", generateMarkdown(userInput));
//           fs.writeFile('README.md', readmeContent, (err) =>
//           err ? console.log(err) : console.log('Successfully created README.md'))
      })
  }+
  
  
  
  //
  init();