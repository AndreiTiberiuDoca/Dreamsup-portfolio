document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const navLinkElements = document.querySelectorAll("nav ul li a");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector('header');
    const sections = document.querySelectorAll("section");

    // Function to update the active link
    const updateActiveLink = () => {
        let currentSection = "";

        // Check if we are at the top of the page
        if (window.scrollY < 10) {
            currentSection = "about"; // Hardcode "about" as the active section
        } else {
            // Otherwise, detect the current section based on scroll position
            let lastSection = null; // Track the last visible section
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Adjust the threshold to account for the sticky header
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    lastSection = section; // Update the last visible section
                }
            });

            // Set the current section to the last visible one
            if (lastSection) {
                currentSection = lastSection.getAttribute("id");
            }
        }

        console.log("Current Section:", currentSection); // Debugging output

        // Remove 'active' class from all links
        navLinkElements.forEach((link) => {
            link.classList.remove("active");
        });

        // Add 'active' class to the corresponding link
        const activeLink = document.querySelector(`nav ul li a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    };

    // Initial call to set the active link on page load
    updateActiveLink();

    // Add scroll event listener to update the active link
    window.addEventListener("scroll", updateActiveLink);

    // Add shadow to the header when scrolled
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling with offset for anchor links
    navLinkElements.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID

            if (targetId === 'about') {
                // Special case for "About": Scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Normal behavior for other sections
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offset = 80; // Adjust this value based on your header's height
                    const elementPosition = targetElement.offsetTop - offset;

                    // Scroll to the target position with smooth behavior
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Toggle mobile menu
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Change the image source based on the current state
        const img = mobileMenu.querySelector('img');
        if (navLinks.classList.contains("active")) {
            img.src = "assets/icons/Menu-Hamburger-Opened.svg"; // Opened state
        } else {
            img.src = "assets/icons/Menu-Hamburger-Default.svg"; // Default state
        }
    });
});