// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    });
});

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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Video fullscreen functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    const videoFullscreen = document.querySelector('.video-fullscreen');
    const fullscreenVideo = videoFullscreen.querySelector('video');
    const closeButton = document.querySelector('.video-fullscreen-close');

    // Open fullscreen when clicking on a video
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            fullscreenVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
            fullscreenVideo.load();
            videoFullscreen.classList.add('active');
            fullscreenVideo.play();
        });
    });

    // Close fullscreen when clicking the close button
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        });
    }

    // Close fullscreen when clicking outside the video
    videoFullscreen.addEventListener('click', function(e) {
        if (e.target === videoFullscreen) {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        }
    });

    // Close fullscreen when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoFullscreen.classList.contains('active')) {
            videoFullscreen.classList.remove('active');
            fullscreenVideo.pause();
        }
    });
});
