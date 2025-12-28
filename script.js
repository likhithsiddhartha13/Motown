// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Intersection Observer for Reveal Effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log('Observed:', entry.target.id || entry.target.className, 'Intersects:', entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Once revealed, we can stop observing if we want it to stay visible
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .menu-category, .gallery-item').forEach((el) => {
    observer.observe(el);
});

// Sticky Header Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
