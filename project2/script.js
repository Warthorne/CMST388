function clearDefault(element) {
    if (element.value === element.placeholder) {
        element.value = '';
    }
}

function isValidEmail(email) {
    // Regular expression for a simple email validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function showError(element, message) {
    // Display an error message next to the given form element
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = message;

    // Insert the error message after the form element
    element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

function removeErrorMessages() {
    // Remove all error messages
    var errorMessages = document.getElementsByClassName('error-message');
    while (errorMessages.length > 0) {
        errorMessages[0].parentNode.removeChild(errorMessages[0]);
    }
}

function submitForm() {
     // Remove existing error messages
     removeErrorMessages();

    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    // Check if email and confirm email match
    if (email !== confirmEmail) {
        showError(document.getElementById('confirmEmail'), "Email and Confirm Email do not match");
        return false; // Prevent form submission
    }

    // Check if the email is in a valid format
    if (!isValidEmail(email)) {
        showError(document.getElementById('email'), "Invalid email format");
        return false; // Prevent form submission
    }


    alert("Form submitted successfully!");

    // Prevent the form from submitting
    return false;
 }

function resetForm() {
     // Remove existing error messages when resetting the form
     removeErrorMessages();

    document.getElementById("userInfoForm").reset();
}
