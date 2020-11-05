/** Blob as URL:---->
 * URL.createObjectURL takes a Blob and creates a unique URL for it.
 * In the form blob:<origin>/<uuid>
 */

let blob = new Blob(['Hello, Bong!'], {type: 'text/plain'});
link.href = URL.createObjectURL(blob);

