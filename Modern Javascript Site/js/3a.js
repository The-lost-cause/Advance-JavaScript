/**Array Buffer: Basic Binary Object
 * A reference to a fixed-length contiguous memory area.
 * To Manipulate an ArrayBuffer, we need to use a VIEW OBJECT
 */

 let buffers = new ArrayBuffer(16);   // Create a buffer of length 16
 let view = new Uint32Array(buffers); // Treat buffer as a sequence of 32-bit Integer
 console.log(typeof buffers);
 console.log(Uint32Array.BYTES_PER_ELEMENT);
 console.log(view.length);
 console.log(view.byteLength);

 // Let's write a value
 view[0] = 1122;

 // Iterate over values
 for(let num of view) {
     console.log(num);
 }

 /**Data View: Special Super-flexible untyped view over ArrayBuffer.
  * It allows to access the data on any offset in any format.
  */

  let buffer = new Uint8Array([255, 255, 255, 255]).buffer
  let dataView = new DataView(buffer);

  // Get 8-bit number at offset 0
  console.log(dataView.getUint8(0));

  // Get 16-bit number at offset 0, it consist of 2 bytes
  console.log(dataView.getUint16(0));