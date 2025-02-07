document.addEventListener("DOMContentLoaded", function () {
    
    // Smooth Scroll for Menu Links
    document.getElementById("home-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        document.getElementById("toggler").checked = false; //  Close menu after clicking
    });

    document.getElementById("about-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        document.getElementById("toggler").checked = false; 
    });

    document.getElementById("product-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
        document.getElementById("toggler").checked = false; 
    });

    document.getElementById("contact-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        document.getElementById("toggler").checked = false; // 
    });

    // Fix the Review Link Alert
    document.getElementById("review-link").addEventListener("click", function(event) {
        event.preventDefault();
        alert('Coming soon! We will release the reviews.');
        document.getElementById("toggler").checked = false;
    });

    // Contact Form Submission Alert
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent actual submission
            alert("Thank you! Your message has been received.");
            contactForm.reset(); // Reset form fields
        });
    }

});
