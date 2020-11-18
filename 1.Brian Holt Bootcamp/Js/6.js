// Interacting of DOM

const redSquares = document.querySelector('.red-square');
redSquares.style.backgroundColor = 'limegreen'
redSquares.style.border = '5px solid peru'

// Event Listeners
const button = document.querySelector('.event-button')
button.addEventListener('click', function() {
    alert('Hey There')
})

// Keyboard Events
const input = document.querySelector('.input-to-copy')
const paragraph = document.querySelector('.p-to-copy-to')

input.addEventListener('keyup', function() {
    paragraph.innerHTML = input.value
})

// Event Delegation
document.querySelector('.button-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON')
    alert(`You clicked on button ${event.target.innerText}`)
})