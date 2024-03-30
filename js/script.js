// <!-- jQuery Smooth Scrolling Starts -->
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 200, 'linear')
});
// <!-- jQuery Smooth Scrolling Ends -->


// <!-- jQuery Navbar Active Class Starts -->
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});
// <!-- jQuery Navbar Active Class Ends -->


// <!-- Typed js Effect Starts -->
const typed = new Typed(".typing-text", {
    strings: [
        "Full Stack Web Developer",
        "Mobile App Developer",
    ],
    loop: true,
    startDelay: 300,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- Typed js Effect Ends -->