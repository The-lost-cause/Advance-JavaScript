// Creating a URL : Both are same

let url = new URL('https://www.google.com/search');
let url2 = new URL('/search', 'https://www.google.com');
console.log(url);
console.log(url2);

// Creating a new URL based on the path relative to an existing URL:
let newURL = new URL('emmawatson', url);
console.log(newURL)

// URL Components Access
console.log(url.protocol, url.host, url.pathname)

// searchParams

let urlSec = new URL('https://www.yahoo.com/search');
urlSec.searchParams.set('q', 'test me!');
console.log(urlSec);

urlSec.searchParams.set('tbs', 'qdr:y');
console.log(urlSec);

for (let [name, value] of urlSec.searchParams) {
    console.log(`${name}=${value}`);
}