document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can add code to save the password in the backend

    // Navigate to another page (for demonstration, it redirects to another HTML page)
    window.location.href = "index2.html";
});
