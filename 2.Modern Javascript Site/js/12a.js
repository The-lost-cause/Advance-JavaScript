function Karan () {
    let arr;
    return (  arr = [1,2,3,4].join('|'))
}

let val = Karan();
console.log(val)

let obj = {
    name: 'Karan',
    age: 25,
}

console.log(Object.keys(obj));
console.log( typeof Object.keys(obj))

delete obj.age;
console.log(obj)

console.log('name' in obj)


// Constructor Functions

function User(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let user = new User('Karan', 25, 'M');
let user2 = new User('Leenu', 25, 'F')

console.log(user, user2);

// Symbols in Js

let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2)

console.log(id1)
// alert(id1.toString())