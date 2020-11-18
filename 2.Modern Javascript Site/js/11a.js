// XMLHttpRequest

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.google.com');

xhr.responseType = 'json';
xhr.send();