// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license == "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license == "GNU"){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else if (license == "MIT"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }else if (license == "BSD 2"){
    return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
  }else if (license == "BSD 3"){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }else if (license == "Boost"){
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }else if (license == "Creative Commons"){
    return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  }else if (license == "Eclipse"){
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
 
  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  Github Username: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
