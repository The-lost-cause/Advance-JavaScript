// Objects : Unordered

const person = {
    name: 'Karan',
    city: 'Chandigarh',
    age: 25,
    favoriteFood: 'chicken',
    isLoved: false,
    love : 'Leenu',
    speak(name) {
        console.log('Woof Woof!')
        console.log(name)
    }
}

console.log(person)
console.log(person.speak('Negi'))


// Arrays: Ordered

const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(arr)
console.log(arr[2])
console.log(arr.length)
console.log(arr.join('|'))
console.log(arr.join())

arr.forEach((element, index) => {
    console.log(element, index)    
});

// Map returns a new Array
let newArr = arr.map(days => days.toUpperCase())
console.log(newArr)

// forEach doesn't return 
let newArr1 = arr.forEach(item => item.toUpperCase())
console.log(newArr1);

