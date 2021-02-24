// Most Basic Example of Closures

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z);

z();

// Closure Interview Questions

function q() {
    var i = 1;
    setTimeout(() => {
        console.log(i)
    }, 2000);
    
    console.log('Closures Understanding')
}

q();

// Question: 2

function a() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }

    console.log('Question:2 Closures');
}

a();

// Question: 3

function a1() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }

    console.log('Question:2 Closures')
}

a1();