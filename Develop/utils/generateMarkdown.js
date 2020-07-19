// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table Of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#rights)
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  Use is permitted under the rights granted by the following license:

  ${data.rights}

  ## GitHub username:
  ${data.github}

  ## You can contact me at ${data.email} if you have any questions.

`;
}

module.exports = generateMarkdown;
