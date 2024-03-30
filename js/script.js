// Navbar Fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


/* */


// Hamburger and Nav Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


/* */


// Get all anchor elements with href containing '#'
let anchorLinks = document.querySelectorAll('a[href*="#"]');

// Loop through each anchor element
anchorLinks.forEach(function(link) {
    // Add click event listener
    link.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();
        
        // Get the target element's ID from href attribute
        let targetId = this.getAttribute('href').substring(1);
        
        // Find the target element
        let targetElement = document.getElementById(targetId);
        
        // Scroll to the target element
        if (targetElement) {
            // Get the distance of the target element from the top of the document
            let offsetTop = targetElement.offsetTop;
            
            // Smooth scroll animation
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});