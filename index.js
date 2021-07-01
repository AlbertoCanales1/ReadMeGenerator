const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What do you need to install this project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can you use your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who made this?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your git hub?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },
    
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