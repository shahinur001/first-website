function addNumbers() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        sum = sum + number;
    }
    return sum;
}

var result = addNumbers(3, 5,5,7);
console.log(result);