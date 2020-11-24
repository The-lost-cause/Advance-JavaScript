// Matching two Input code

function check() {
    let email1 = document.getElementById('email_addr');
    let email2 = document.getElementById('email_repeat');

    if (email1.value != email2.value) {
        alert('The two emails much match !!');
        return false;
    }
}