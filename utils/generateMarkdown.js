const licenseBadges = require("./licenseBadges");

function docuGenerator (userInput) {
    return `

    
    # ${userInput.Title}
    ${licenseBadges(userInput)}
    
    ## Description
    ${userInput.Description}
    ***







        
    `;
}


module.exports = docuGenerator