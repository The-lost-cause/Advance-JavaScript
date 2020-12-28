let counter = 0;
counter++
console.log(counter)

let counter_2 = 0;
++counter_2;
console.log(counter_2)


// Question from ?

let login = prompt('Type Bitch');
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' :'';


// Logical Operator Question : Last

let login2 = prompt('Login ?');

if ( login2 == 'Admin') {

    let password = prompt('Password ?');
    if (password == 'TheMaster') {
        alert('WELCOME')
    } else if ( password == '' || password == null) {
        alert ('CANCELLED')
    } else {
        alert('WRONG PASSWORD')
    }

} else if( login2 == '' || login2 == null) {

    alert('Canelled');

} else {
    alert('I don\'t know')
}




