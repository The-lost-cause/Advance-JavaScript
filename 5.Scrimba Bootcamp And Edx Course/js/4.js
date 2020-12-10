// Module:2 of Edx Course

let karan = {
    familyName: 'Negi',
    givenName: 'Abu',
    age: 25
}

for (value in karan) {
    // Giving Keys
    console.log(value)
    // Giving Values   
    console.log(karan[value])
}

// Callback Function : First Way

button.addEventListener('click', processClick);

function processClick(event) {
    alert('Button Clicked')
}

// Anonymous Function : Function without a name : Second Way

h1.addEventListener('click', function(event) {
    alert('H1 Clicked');
})

// Third Way

h2.onclick = function(event) {
    alert('h2 Clicked')
}

// Removing Event Listener after Executed

myButton.addEventListener('click', buttonClick);

function buttonClick(event) {
    alert('Button will work only once');
    myButton.removeEventListener('click', buttonClick)
}