//returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None"){
  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />`
  }
  else{ return '';}
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      text = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPLv3":
      text = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;    
    case "ISC":
      text = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case "MIT":
      text = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "MPL":
      text = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;    
    case "WTFPL":
      text = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
      break;
    default:
      text = '';
  }
  if (license != "None"){
    return text;
    }
    else{ return '';}
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None"){
  return `## License
  ${renderLicenseLink(license)}
  <br />
  This application is covered by the ${license} license.`
  }else{ return '';}
}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
 ${data.questions}<br />
<br />
GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
Email: ${data.email}<br /><br />
`;
}

module.exports = generateMarkdown;
