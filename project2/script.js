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

function showError(message) {
    // Display an error message in a popup
    alert(message);
}

function showAllErrors(errors) {
    // Display all accumulated error messages in a popup
    if (errors.length > 0) {
        alert("Errors:\n" + errors.join("\n"));
    }
}

function removeErrorMessages() {
    // No need to remove error messages for this approach
}

function submitForm() {
    // Remove existing error messages
    removeErrorMessages();

    // Add your form validation logic here
    var errors = [];
    
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    // Check if email and confirm email match
    if (email !== confirmEmail) {
        errors.push("Email and Confirm Email do not match");
    }

    // Check if the email is in a valid format
    if (!isValidEmail(email)) {
        errors.push("Invalid email format");
    }

    // Check at least two contact methods are chosen
    var selectedContactMethods = document.querySelectorAll('#contact input[name="contactMethod"]:checked');
    if (selectedContactMethods.length < 2) {
        errors.push("Select at least two contact methods");
    }

    // Display or use the errors array as needed
    if (errors.length > 0) {
        showAllErrors(errors);
        return false; // Prevent form submission
    }

    // Example: Displaying an alert for testing
    alert("Form submitted successfully!");

    // Returning false to prevent the form from actually submitting in this example
    return false;
}

function resetForm() {
    // No need to remove error messages for this approach

    document.getElementById("userInfoForm").reset();
}
