// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields');
                return;
            }
            
            // In a real scenario, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            
            // Clear form
            contactForm.reset();
        });
    }
    
    // Handle newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // In a real scenario, you would send this data to a server
            alert('Thank you for subscribing to our newsletter!');
            
            // Clear form
            newsletterForm.reset();
        });
    }
});
