function validateForm() {
    clearErrors();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    if (username === '') {
        setError('usernameError', 'Username cannot be empty.');
        isValid = false;
    }

    if (email === '') {
        setError('emailError', 'Email cannot be empty.');
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        setError('emailError', 'Invalid email format. Must contain @ and a dot.');
        isValid = false;
    } else {
        const atPosition = email.indexOf('@');
        const dotPosition = email.lastIndexOf('.');
        if (atPosition < 1 || dotPosition < atPosition + 3 || dotPosition + 2 >= email.length) {
            setError('emailError', 'Invalid email structure. Check positions of @ and .');
            isValid = false;
        }
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        setError('phoneError', 'Phone number cannot be empty.');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        setError('phoneError', 'Phone number must be exactly 10 numeric digits.');
        isValid = false;
    }

    if (password === '') {
        setError('passwordError', 'Password cannot be empty.');
        isValid = false;
    } else if (password.length < 7) {
        setError('passwordError', 'Password must be at least 7 characters long.');
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        setError('passwordError', 'Password must contain at least one capital letter.');
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        setError('passwordError', 'Password must contain at least one digit.');
        isValid = false;
    } else if (!/[&$#@]/.test(password)) {
        setError('passwordError', 'Password must contain at least one special character (&, $, #, @).');
        isValid = false;
    }

    if (confirmPassword === '') {
        setError('confirmPasswordError', 'Confirm Password cannot be empty.');
        isValid = false;
    } else if (confirmPassword !== password) {
        setError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    return isValid;
}

function setError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}