const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: '',
        },
        {
            type: 'input',
            name: 'description',
            message: '',
        },
        {
            type: 'input',
            name: 'install',
            message: '',
        },
        {
            type: 'input',
            name: 'usage',
            message: '',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: '',
        },
        {
            type: 'input',
            name: 'contributing',
            message: '',
        },
        {
            type: 'input',
            name: 'test',
            message: '',
        },
        {
            type: 'input',
            name: 'github',
            message: '',
        },
        {
            type: 'input',
            name: 'email',
            message: '',
        }

    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);
        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md'));
    })

const gnerateREADME = (answers) =>
    `## ${answers.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
    ## Description
    ${answers.desciption}.
    
    ## Table of Contents
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
    ${answers.contributing}.

    ## Tests

    ## Questions
    [A link to my gitHub](https://gitbut.com/${answers.github})
    Email: ${answers.email}
    `