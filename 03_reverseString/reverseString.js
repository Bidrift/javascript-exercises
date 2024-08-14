const reverseString = function(ourString) {
    const letters = ourString.split("")
    let resultString = "";
    for (let i = letters.length - 1; i >= 0; i--) {
        resultString = resultString.concat(letters[i]);
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
