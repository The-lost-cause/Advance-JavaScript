// Basic Example of CallBack Function

function x(y) {
    y();
}

x(function y () {
    console.log('CallBackFunction')
})

// Another Example

setTimeout(() => {
    console.log('Timer')
}, 2000);

document.getElementById('click').addEventListener('click', function click() {
    alert('Hi')
})