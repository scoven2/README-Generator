const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = (answers) =>
    `# ${answers.title}   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
${answers.description}.

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.install}.

## Usage
${answers.usage}.

## License
${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
[A link to my gitHub](https://github.com/${answers.gitHub})  
Email: ${answers.email}`

inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of the project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'what license would you like?',
            choices: ['MIT', 'Apache', 'GNU'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the instructions for contributing?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Do you have any tests to add?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is an email people can send questions to?'
        }


    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);
        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    })