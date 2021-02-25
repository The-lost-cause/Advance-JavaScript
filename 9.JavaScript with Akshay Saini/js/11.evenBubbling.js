// Bubbling and Capturing : Track of Event Progating.
// Pass the third argument as true in addEventListener, we will see the Capturing/Trickling phase.
// event.stopPropogation for stopping the event propogation.

document.querySelector('#grandparent')
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
})

document.querySelector('#parent')
.addEventListener('click', (e) => {
    console.log('Parent Clicked')
    e.stopPropagation();
})

document.querySelector('#child')
.addEventListener('click', () => {
    console.log('Child Clicked')
})