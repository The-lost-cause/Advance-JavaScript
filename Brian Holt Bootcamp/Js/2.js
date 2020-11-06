// Strict Equality Check Here happening here

if (2 + 2 === '4') {
    console.log('Hurray')
} else {
    console.log('Alas!')
}

// Coercion is happening here, String '4' is converting to Number 4.

if (2 + 2 == '4') {
    console.log('Hurray')
} else {
    console.log('Alas!')
}

// For loop in Js

let friendsAtyourParty = 0;

for (let i = 0; i <= 10; i++) {
    friendsAtyourParty++
}

console.log(friendsAtyourParty)

// Function

function add(num1, num2) {
    return num1 + num2
}

console.log(add(5, 5))

//  str.substr(start, [length])

const name = 'Karan Singh Negi'
console.log(name.substr(6,5))