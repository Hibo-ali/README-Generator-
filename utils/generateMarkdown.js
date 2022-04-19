const licenseBadges = require("./licenseBadges");

function docuGenerator (userInput) {
    return `

    
    # ${userInput.Title}
    ${licenseBadges(userInput)}
    
    ## Description
    ${userInput.Description}
    ***

    # Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***


## Installation
${userInput.Installation}



## Usage
${userInput.Usage}


## License
${licenseBadges(userInput)}
## Contributing
If you would like to contribute to this project, please [add me on GitHub](https://github.com/${userInput.Contributing}).







        
    `;
}


module.exports = docuGenerator