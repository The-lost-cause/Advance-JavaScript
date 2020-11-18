// File Operations

function showFile(input) {
    let file = input.files[0];
    console.log(`File name: ${file.name}`);
    console.log(`Last Modified: ${file.lastModified}`);
}

// FileReader: An object with the sole purpose of reading data from Blob objects
// It delivers data using events, as reading from disk may take time

function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        console.log(reader.result);
    }

    reader.onerror = function() {
        console.log(reader.error)
    }
}