// Currying through Bind Method

let mul = function(x, y) {
    console.log(x * y)
}

let mulByTwo = mul.bind(this, 2)
mulByTwo(5)

// Currying through Closures

let multiply = function(x) {
    return function(y) {
        console.log(x * y)
    }
}

let result = multiply(3);
console.log( result(5) );