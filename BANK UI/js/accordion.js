function toggleAccordion(id) {
    var content = document.getElementById('content-' + id);
    var otherContents = document.querySelectorAll('.accordion-content:not(#content-' + id + ')');
    
    // Toggle the content
    content.classList.toggle('hidden');
    
    // Hide other contents
    otherContents.forEach(function(item) {
        item.classList.add('hidden');
    });
}