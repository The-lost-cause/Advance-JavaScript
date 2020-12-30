// Constructor function
//  Below constuctor can't be called again

let user = new function() {
    this.name = 'karan',
    this.age  = 26;
    this.sex  = 'M'
}

console.log(user)


// Constructor Function Calculator

function Calculator() {
    this.read = function() {
        this.a = +prompt('Num1');
        this.b = +prompt('Num2');
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    }

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//  Constructor Function Accumulator

function Accumulator(stratingValue) {
    this.value = stratingValue;
    this.read = function() {
        this.value += +prompt('num');
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values