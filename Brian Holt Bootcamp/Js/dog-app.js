// DOG APP Project

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

// Here Making the Select Box

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const breedsObject = data.message;
        const breedsArray  = Object.keys(breedsObject);
        // console.log(breedsArray);
        // console.log(breedsArray.length)

        // Creating a bunch of Options
        const select = document.querySelector('.breeds');
        for (let i = 0; i <= breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

// Here Sending the Request with the desired Option selected

select.addEventListener('change', function(event) {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    // console.log(url)
     getDoggo(url);

})

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner')

function getDoggo (url) {

    // Adding Spinner until the request is sent (LOADING SCREEN)
    spinner.classList.add('show');
    img.classList.remove('show')
    // console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then (function (data) {
            img.src = data.message;
            
    })
}

img.addEventListener('load', function () {
    // Once we get the message , we need to remove the spinner
    spinner.classList.remove('show')
    img.classList.add('show')
})