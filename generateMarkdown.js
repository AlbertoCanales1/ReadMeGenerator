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
  return `
  # ${data.title}

  #Table of Contents

  -[Intallation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)

  ## Installation:
  ${response.installation}

  ## Usage:
  ${response.usage}

  ## Credits:
  ${response.credits}

  ## License:
  ${response.license}




`;
}

//Initialize the program

async function init() {
  try{
    const response = await promptUser();

    const readMe = generateMarkdown(response);

    await writeFileAsync("README.md", readMe);
    
  } catch (err) {
  }
}

//
init();