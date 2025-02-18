document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Simulate form submission
    setTimeout(() => {
        document.getElementById("formResponse").innerText = "Thank you for your message! We'll get back to you soon.";
        document.getElementById("contactForm").reset();
    }, 1000);
});
