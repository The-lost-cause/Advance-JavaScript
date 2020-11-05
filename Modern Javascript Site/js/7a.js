/** FETCH API:
 *  Fetch Method: Return a Promise
 *  Promise: Is resolved to an Object Called RESPONSE
 */

 let url = 'https://www.google.com';
 let response = (async () => { await fetch(url, { method: 'POST'})})()

 console.log(response);
 console.log(response.status)
 console.log(response.ok)

if (response.ok) {
    let json = response.json(); // If HTTP-Status is 200-299 then get the response body
    console.log(json)
} else {
    console.log(`HTTP-Error: ${response.status}`)
}
