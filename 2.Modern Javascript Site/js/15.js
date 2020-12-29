// // Objects Modern Js Question

function isEmpty(obj) {
    
    for (key in obj) {
        return false
    }
    return true
}

let schedule = {};
alert( isEmpty(schedule) )

// // Example : 2

let sum = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

for (key in salaries) {
    sum += salaries[key]
}

alert(sum);


// Example: 3

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  
for (key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] *= 2; 
    }
} 

console.log(menu)


// Objects Calculator
let num1, num2;

let calculator = {
    read() {
        num1 = +prompt('Number-1');
        num2 = +prompt('Number-2');
    },
    sum() {
        return num1 + num2;
    },
    mul() {
        return num1 * num2;
    }

}

calculator.read();
alert(calculator.sum())
alert(calculator.mul())