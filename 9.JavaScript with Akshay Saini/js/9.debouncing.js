// Debouncing in Js

let counter = 0;

const getData = () => {
    // calls an API and gets the data
    console.log('Fetching Data...', counter++)
}

const doSomeMagic = function(fn, delay) {
    let timer;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timer)
         timer = setTimeout(() => {
            getData(context, arguments)
        }, delay)
    }
}

const betterFunction = doSomeMagic(getData, 300);