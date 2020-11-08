// Destructuring Example with Map

const list = [
    { name: 'Karan',   age: 25 },
    { name: 'Leenu',   age: 25 },
    { name: 'Bong',    age: 19 },
    { name: 'Godiyal', age: 26 }
] 

const names = list.map(({ name }) => name );  
console.log(names);
console.log(typeof names)