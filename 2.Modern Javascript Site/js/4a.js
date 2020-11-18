/**TextDecoder Object: Allows to read the values into an actual JavaScript String */

let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
console.log( new TextDecoder().decode(uint8Array) );

let arr = new Uint8Array([228, 189, 160, 229, 165, 189]);
console.log( new TextDecoder().decode(arr) ); 

// Decoding a part of the buffer by creating a Subarray View for it

let subArray = new Uint8Array([0, 72, 101, 108, 111, 0]);
let binaryString = subArray.subarray(1, -1);
console.log( new TextDecoder().decode(binaryString));

/**TextEncoder: Does Reverse Thing- Converts a string into Bytes */

let encoder = new TextEncoder();

let valued = encoder.encode('Karan Singh Negi');
console.log(valued);

// Decoding it back

console.log( new TextDecoder().decode(valued));