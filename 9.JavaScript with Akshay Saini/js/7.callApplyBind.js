let name1 = {
    firstName: 'Karan',
    lastName: 'Negi',
}

let printFullName = function (homeTown) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + homeTown)
}

printFullName.call(name1, 'Chandigarh');

let name2 = {
    firstName: 'Kanu',
    lastName: 'Negi'
}

// Call bind : Function borrowing

printFullName.call(name2, 'Goa');


// Apply Method

printFullName.apply(name2, ['Chd', 'Pune'])

// Bind Method : It returns the copy of that method

let printName = printFullName.bind(name2, 'Chandigarh');
console.log(printName)
printName()

// Polyfill for Bind Method: Interview Question

Function.prototype.mybind = function(...args) {
    let obj = this, params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}
