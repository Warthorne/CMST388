  // Countdown Timer
  let timeRemaining = 599; // 10 minutes in seconds

  function updateCountdown() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('countdown').innerText = `${formattedTime}`;

    if (timeRemaining === 0) {
      clearInterval(timer);
      document.getElementById('countExpire').innerText = 'TIME EXPIRED, PLEASE REFRESH PAGE!';
      showTimeoutPopup();
    } else {
      timeRemaining--;
    }
  }
  
  const timer = setInterval(updateCountdown, 1000);

  function showTimeoutPopup() {
    const popupMessage = 'Your timer has expired. Do you want to refresh the page?';
    const popup = confirm(popupMessage);

    if (popup) {
      location.reload();
    } else {
      // Register the beforeunload event to show the confirmation message when leaving the page
      window.addEventListener('beforeunload', function (event) {
        const confirmationMessage = 'You have not made a choice. Are you sure you want to leave?';
        event.returnValue = confirmationMessage;
      });
    }
  }

  // Utility function to change background color and show/hide sections
  function updateFieldStatus(fieldId, isError) {
    const field = document.getElementById(fieldId);

    field.style.backgroundColor = isError ? 'lightcoral' : 'white';
    if (isError) {
      field.focus();

    }
  }

  // Calculate Total Function
  function calculateTotal() {
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    const totalSection = document.getElementById('totalSection');
    const contactInfoSection = document.getElementById('contactInfo');

    document.getElementById('ticketError').innerText = '';

    if (isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 3) {
      updateFieldStatus('ticketQuantity', true);
      totalSection.style.display = 'none';
      contactInfoSection.style.display = 'none';
      ticketError.innerText = 'Please choose between 1 and 3 tickets.';
      highlightField('ticketQuantity');
      
    } else {
      updateFieldStatus('ticketQuantity', false);
      totalSection.style.display = 'block';
      contactInfoSection.style.display = 'block';

      const totalPrice = parseFloat(ticketQuantity) * 10.00; // Assuming ticket cost is $10 each
      document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    }

  }
  
    // Reset Form Function
    function resetForm() {
      document.getElementById('ticketQuantity').value = '';
      document.getElementById('ticketQuantity').style.backgroundColor = 'white';
      document.getElementById('totalSection').style.display = 'none';
      document.getElementById('totalPrice').innerText = '';
      document.getElementById('contactInfo').style.display = 'none';
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('ticketError').innerText = '';

    }

    

  // Complete Purchase Function
  function completePurchase() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const isValidName = name.trim() !== '';
    const isValidEmail = email.trim() !== '' && /\S+@\S+\.\S+/.test(email);

    updateFieldStatus('name', !isValidName);
    updateFieldStatus('email', !isValidEmail);
  
    // Perform validation for name
   if (!name) {
    // Display an error message and highlight the name field
    nameError.innerText = 'Please enter your name.';
    return;
  }

  // Perform email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          // Display an error message and highlight the email field
          emailError.innerText = 'Please Enter a proper email address';
          return;
        }

    if (isValidName && isValidEmail) {
      clearInterval(timer);
      document.getElementById('nameError').innerText = '';
      document.getElementById('emailError').innerText = '';
      document.getElementById('complete').innerText = 'THANK YOU FOR YOUR PURCHASE! SEE YOU THERE!';
      const ticketQuantity = document.getElementById('ticketQuantity').value;
      const totalAmount = parseFloat(ticketQuantity) * 10.00; // Assuming ticket cost is $10 each
      alert(`Thank you for your purchase!\nTotal Amount: $${totalAmount.toFixed(2)}`);

    }
  }

  

  
  
