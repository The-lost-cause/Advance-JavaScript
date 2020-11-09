// Dog API Understanding

const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo () {

    const promise = fetch(BREEDS_URL);

    // Most Basic AJAX Understanding 

    promise
        .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
        .then(function(processedResponse) {
        console.log(processedResponse);
        console.log(processedResponse.message);

        // Putting the image recieved from the API to the HTML
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = 'Cute Doggo';

        document.querySelector('.doggos').appendChild(img);
    });
}

console.log("this will log first");

// Whenever some-one clicks the BUTTON(ADD-DOGGO) It will run
document.querySelector('.add-doggo').addEventListener('click', addDoggo)