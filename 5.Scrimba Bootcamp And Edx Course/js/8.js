let persons = [
    {name: 'Karan', age: 51},
    {name: 'Negi',  age: 44},
    {name: 'Leenu', age: 25}
]

function compareByAge(a, b) {
    if (a.age < b.age) return -1

    if (a.age > b.age) return 1;
    return 0;
}

console.log( persons.sort(compareByAge) );

let arr = [1, 2, 3, 'four', 'five', 'six', undefined * 1, 'height'];
// console.log(arr)

let answ = arr.splice(0, 4)
// console.log(answ);
delete arr[2]
console.log(arr)
console.log(arr[2]);


// Substring Method

let s1 = 'Karan';

console.log(s1.substring(0, 2))

let s = 'Michel';
 
function removeChars(s, startIndex, numberOfCharsToRemove) {
   return s.substring(startIndex + numberOfCharsToRemove);
}
 
// remove 3 consecutive chars from s, starting at index = 1
s = removeChars(s, 1, 3);
 
console.log(s); // will display "Mel" in the console


// WebCam API

let constraints = {
    audio : true,
    video : {
        width: 1280,
        height: 720
    }
}

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
    
    let video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
        video.play();
    }
}).catch(function(err) {
    console.log(err.name + ': ' + err.message)
})