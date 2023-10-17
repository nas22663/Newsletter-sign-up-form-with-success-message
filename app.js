function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const submitLink = document.getElementById('submitLink');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        // Valid email address
        errorMessage.textContent = ''; // clear error message
        window.location.href = submitLink.href; // navigate using the href of the anchor
    } else {
        // Invalid email address
        errorMessage.textContent = 'Valid email required';
        event.preventDefault(); // prevent default action, which in this case is the link navigation
        emailInput.style.backgroundColor = 'hsl(4, 100%, 67%,.2)';
        emailInput.style.border = '1px solid red';  // set background color to light red

    }
}
