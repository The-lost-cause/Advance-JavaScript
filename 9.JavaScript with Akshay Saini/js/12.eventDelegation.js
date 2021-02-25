// Event Delegation 

document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName == 'LI') {
      console.log(e.target.id)
    }
  });