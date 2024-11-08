// Initialize EmailJS in your HTML file or JavaScript file, using your User ID
emailjs.init("yoshiminakajima24@gmail.com"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define the parameters to match your EmailJS template fieldsg
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_ksh6qfs", "template_p9ht8lx", templateParams)
    .then(response => {
        alert("Email sent successfully!");
    })
    .catch(error => {
        console.error("Failed to send email:", error);
        alert("There was an error sending the email.");
    });
}