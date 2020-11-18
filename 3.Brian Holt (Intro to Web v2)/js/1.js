const number = 55;

if (number === 55) {
    console.log('It\'s true')
} else {
    console.log('not true')
}

let friendsAtYourParty = 0;

while (friendsAtYourParty < 10) {
    friendsAtYourParty = friendsAtYourParty+1;
}

console.log(friendsAtYourParty);

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5)
console.log(finalAnswer);

// Objects and Arrays

console.log(this);
console.log(this.scrollX);
console.log(this.scrollY);


const arr = ['M', 'T', 'W', 'TH', 'FR', 'SAT', 'SUN'];

let = numberOfTimeRan = 0;

arr.forEach(function (day) {
    numberOfTimeRan++;
    console.log(day, numberOfTimeRan);
})