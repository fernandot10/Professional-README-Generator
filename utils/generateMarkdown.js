

function renderLicenseBadge(license) {
  if (license === '') {
    return '';
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-blue/style=plastic';
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue/style=plastic'
    case 'GNU':
      return 'https://img.shields.io/badge/license-GNU-blue/style=plastic'
    case 'None':
      return '';
  }
}

function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return renderLicenseBadge(license);
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  # ${renderLicenseSection(data.license[0])}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contribution Guidelines
  ${data.contribution}
  
  ## Testing
  ${data.test}
  
  ## License 
  ${data.license}
  
  ## Questions
  How to reach me...
  - GitHub: https://github.com/${data.github}
  - Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
