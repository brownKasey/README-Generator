// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const genMD = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
return inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project. Explain why and how you made it.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project? Explain in detail.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who would you like to give credit to? Include their github profiles or main online presence.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license form the list!.',
      choices: ['Mit License', 'GNU GPLv2', 'GNU GPLv3','Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Mozilla Public License 2.0']
    },
  ])
};





// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', genMD(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
