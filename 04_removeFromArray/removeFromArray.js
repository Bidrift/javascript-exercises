const removeFromArray = function(ourArray, ...Args) {
    let newArray = [];
    nextElement: for (const element of ourArray) {
        for (const arg of Args) {
            if (arg === element) {
                continue nextElement;
            }
        }
        newArray.push(element);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
