// Initialize PayPal Donate Button with a standard form approach
document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    const container = document.getElementById('paypal-donate-button-container');
    
    // Create a PayPal donation form
    const form = document.createElement('form');
    form.action = 'https://www.paypal.com/cgi-bin/webscr';
    form.method = 'post';
    form.target = '_blank';
    
    // Add necessary hidden fields
    const fields = [
        { name: 'cmd', value: '_donations' },
        { name: 'business', value: 'unejamendi@gmail.com' },
        { name: 'item_name', value: 'Donation to Protect Me Albania' },
        { name: 'amount', value: '20.00' },
        { name: 'currency_code', value: 'USD' },
        { name: 'no_shipping', value: '1' },
        { name: 'return', value: window.location.href },
        { name: 'cancel_return', value: window.location.href }
    ];
    
    // Add each field to the form
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });
    
    // Create the submit button with the PayPal image
    const button = document.createElement('input');
    button.type = 'image';
    button.src = 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif';
    button.name = 'submit';
    button.alt = 'Donate with PayPal button';
    button.title = 'PayPal - The safer, easier way to pay online!';
    
    // Add the button to the form
    form.appendChild(button);
    
    // Add the form to the container
    container.innerHTML = '';
    container.appendChild(form);
    
    // Add a thank you message handler
    form.addEventListener('submit', function() {
        // We'll show a thank you message when they return from PayPal
        localStorage.setItem('donation_attempted', 'true');
    });
    
    // Check if user is returning from PayPal
    if (localStorage.getItem('donation_attempted') === 'true') {
        alert('Thank you for your generous donation to Protect Me Albania!');
        localStorage.removeItem('donation_attempted');
    }
});
