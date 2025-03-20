// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const navLinkElements = document.querySelectorAll("nav ul li a");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector('header');
    const sections = document.querySelectorAll("section");

    // Add active class to the current navigation link based on scroll position
    window.addEventListener("scroll", () => {
        let currentSection = "";
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
    
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });
    
        navLinkElements.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle mobile menu
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});