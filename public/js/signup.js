const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
    } else {
        alert('Failed!');
    }
    }
};

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);s