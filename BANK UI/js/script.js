// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set a timeout to simulate loading time
    setTimeout(function () {
        // Redirect to home page
        window.location.href = 'home.html';
    }, 6000); // 6000 milliseconds = 6 seconds 
});
