// An array named "Arguments" is created automatically in each function.


function f () {
    return arguments;
}

let arg = f('Karan', 'Singh', 'Negi');
console.log(arg);

// Another Example of the sum with a variable number of Arguments

function newSum() {
    let i, res = 0;
    let numberOfParameters = arguments.length;

    for (let i = 0; i < numberOfParameters; i++) {
        res += arguments[i]
    }

    return res;

}

let sum = newSum(1,2,3,4,5);
console.log(sum);