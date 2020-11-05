// Same-Origin Access here

let iframeWindow = iframe.contentWindow;
console.log(iframeWindow);

let iframeDoc = iframe.contentDocument;
console.log(iframeDoc);

iframe.onload = function() {
    iframe.contentDocument.body.prepend('Hello World')
}

console.log(window.frames.three)