/** FormData:
 *  Object to represent the HTML form data.
 */

 formElem.onsubmit = async (e) => {
     e.preventDefault();
     
     let response = await fetch ('./8.Fetch-FormData.html', {
        method: 'POST',
        body: new FormData(formElem)
     });

     let result = await response.json();
     console.log(result.message)
 }

 let formData = new FormData(formElem);
 console.log(formData)

 // Abort Operations

 let controller = new AbortController();
 let signal = controller.signal;
 console.log(signal);

 signal.addEventListener('abort', () => alert('abort !'));
 controller.abort()