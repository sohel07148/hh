document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
