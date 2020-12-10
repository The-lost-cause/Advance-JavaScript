function init(event) {
    // Called when the page is loaded: Meaning the DOM is Ready
    console.log('Page Loaded')
    console.log(event)
    console.log(event.type)
    pageStatus.innerHTML = 'PAGE Loaded'
}

window.addEventListener('keydown', function(event) {
    alert(event.keyCode + ' : ' + event.key + ' ' + event.code)
})