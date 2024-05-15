// document.addEventListener("DOMContentLoaded", function() {
//     const toggles = document.querySelectorAll('.toggle');
//     toggles.forEach(toggle => {
//         toggle.addEventListener('click', function() {
//             const targetId = this.getAttribute('data-target');
//             const content = document.getElementById(targetId);
//             content.classList.toggle('hidden');
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            
            // Hide all content elements
            document.querySelectorAll('.content').forEach(element => {
                if (element.id !== targetId) {
                    element.classList.add('hidden');
                }
            });
            
            // Toggle visibility of clicked content
            content.classList.toggle('hidden');
        });
    });
});