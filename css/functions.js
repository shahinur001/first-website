// nums = [5,2,6,3,7,4];

function oddEven(number){
    if (number % 2 == 0) {
        return number;
    }
    else{
        return number*2;
    }
}

function findOddEven(nums){
    var outputArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = oddEven(num);
        outputArray.push(result);
    }
    return outputArray;
}
// findOddEven(nums);
// console.log('New Input');

const p = [3,6,7,8,9,3,4,2];
var out = findOddEven(p);
console.log(out);