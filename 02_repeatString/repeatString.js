const repeatString = function(ourString, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let s = "";
    for (let i = 0; i < n; i++) {
        s = s.concat(ourString);
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
