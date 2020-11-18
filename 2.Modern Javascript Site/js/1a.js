 //  Understanding Window popups
 
 window.open('https://www.facebook.com');
 console.log(window.name);


// More arguments for open method of window

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

window.open('https://www.google.com','test', params);

// If the name here newtest would be same as above test, then no new window will be opened.

let newWindow = open('https://www.yahoo.com', 'newtest', 'width=300,height=300');
console.log(newWindow)

// Closing a window

setTimeout(() => newWindow.close, 2000)

///window.onblur = () => window.focus();


let newWin = window.open("about:blank", "hello", "width=200,height=200");

newWin.document.write("Hello, world!");