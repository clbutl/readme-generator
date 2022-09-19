// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownJs = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a breif description of your project.',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please provide a description on how to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your app?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please provide a description on how other users can contribute to your project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide a description on how other users can test to your project.',
  },
  {
    type: 'input',
    name: 'deployed',
    message: 'What is the link to your deployed application.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license: ',
    choices: [
      'MIT',
      'Mozilla',
      'Apache',
      'None',
    ]
  },
];

// TODO: Create a function to write README file
const writeToFile = ({ title, description, install, usage, contribute, license, tests, deployed, github }, licenseInformation) =>
  `# ${title}
  ${licenseInformation.licenseBadge}

  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="description">Description</a>
  
  ${description}

  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold">Table of Contents</a>

  - [Installation Instructions](#installing)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contribute)
  - [Licensing Information](#license)
  - [Test Instructions](#testing)
  - [GitHub](#github)
  
  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="installing">Installation Instructions</a>
  
  ${install}
  
  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="usage">Usage Information</a>
  
  ${usage}
  
  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="contribute">Contribution Guidelines</a>
  
  ${contribute}

  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="license">License</a>

  ${licenseInformation.licenseLink}
  
  ## <a style="text-decoration: none; color: rgb(210, 210, 210); font-weight: bold" id="testing">Test Instructions</a>
  
  ${tests}
  
  ### <a style="text-decoration: none; color: white; font-weight: bold" id="github">GitHub Profile:</a>
  [${github}'s Profile Here](https://github.com/${github})


  Deployed Application: ${deployed}`;



// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers.license)
    const licenseInfo = generateMarkdownJs(answers.license)
    console.log(licenseInfo)

    const readmePageContent = writeToFile(answers, licenseInfo);

    console.log(answers)
    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });
}

// Function call to initialize app
init();
