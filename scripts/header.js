// Active link highlighting
const navLinkElements = document.querySelectorAll("nav ul li a");

// Mobile menu toggle
const navMenu = document.querySelector(".nav-links");

// Add active class to the current navigation link
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

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
    });

    // Toggle mobile menu
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});