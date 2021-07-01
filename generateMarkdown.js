// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Table of Contents

  -[Intallation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)

  ## Installation:
  ${data.install}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ##GitHub:
  ${data.github}

  ##Email
  ${data.email}

  ## License:
  ${data.license}




// `;
}

module.exports = generateMarkdown;
// }

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         const readmeContent = writeToFile(answers);
//         fs.writeFile('README.md', readmeContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created README.md'))
//     })
// }+



// //
// init();