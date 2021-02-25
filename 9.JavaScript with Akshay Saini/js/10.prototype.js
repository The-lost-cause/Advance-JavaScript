let obj = {
    name: 'Karan'
}

console.log(obj)
console.log(obj.__proto__)
console.log(obj.__proto__.__proto__)

// Example:1 

let animal = {
    eats: true
}

let rabbit = {
    jumps: true 
}

// Same as rabbit.[[Prototype]] = animal;
// The value of __proto__ can either be null or object. Other types are ignored
rabbit.__proto__ = animal;  

// Prototypal Inheritance can be seen here
console.log(rabbit.eats);




