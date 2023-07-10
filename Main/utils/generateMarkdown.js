
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const licenseBadge = (license) => {
    let badge;

    if (license == 'Mit License'){
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    } else if (license == 'GNU GPLv2'){
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

        
    }else if (license == 'GNU GPLv3'){
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    }else if (license == 'Apache 2.0 License'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    }else if (license == 'BSD 3-Clause License'){
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    }else if (license == 'BSD 2-Clause License'){
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    }else if (license == 'Mozilla Public License 2.0'){
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    }else if (license = '')
    badge = '';
    

    return badge;

};

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, credits, license }) => `
# ${title}
${licenseBadge(license)};

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

I would like to give credits to: 

${credits}

## License

This project is using the ${license}. 

`;

module.exports = generateMarkdown;
