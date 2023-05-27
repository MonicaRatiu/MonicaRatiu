// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form submission logic here
    // For example, send data to a server using AJAX or perform client-side validation
    // You can access form field values using the following syntax:
    // const name = contactForm.elements['name'].value;
    // const email = contactForm.elements['email'].value;
    // const message = contactForm.elements['message'].value;

    // Reset the form after submission
    contactForm.reset();
});