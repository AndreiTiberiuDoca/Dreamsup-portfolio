document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const projectCards = document.querySelectorAll(".project-card");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalBody = document.getElementById("modal-body");
    const closeModalButton = document.querySelector(".close-modal");

    // Function to block scrolling on the page
    const blockScroll = () => {
        document.body.style.overflow = "hidden"; // Disable scrolling
    };

    // Function to unblock scrolling on the page
    const unblockScroll = () => {
        document.body.style.overflow = ""; // Enable scrolling
    };

    // Open modal when clicking on a project card
    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            const modalId = card.getAttribute("data-modal-id"); // Get the modal ID from the clicked card
            const modalContent = document.getElementById(modalId).innerHTML; // Get the modal content
            modalBody.innerHTML = modalContent; // Inject the content into the modal
            modalOverlay.style.display = "block"; // Show the modal
            blockScroll(); // Block scrolling on the page
        });
    });

    // Close modal when clicking the close button
    closeModalButton.addEventListener("click", () => {
        modalOverlay.style.display = "none"; // Hide the modal
        modalBody.innerHTML = ""; // Clear the modal content
        unblockScroll(); // Unblock scrolling on the page
    });

    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = "none"; // Hide the modal
            modalBody.innerHTML = ""; // Clear the modal content
            unblockScroll(); // Unblock scrolling on the page
        }
    });

    // Optional: Close modal when pressing the Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modalOverlay.style.display === "block") {
            modalOverlay.style.display = "none"; // Hide the modal
            modalBody.innerHTML = ""; // Clear the modal content
            unblockScroll(); // Unblock scrolling on the page
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    // Add event listeners to filter buttons
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Get the selected category
            const selectedCategory = button.getAttribute("data-category");

            // Filter project cards based on the selected category
            projectCards.forEach((card) => {
                if (card.classList.contains(selectedCategory)) {
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                }
            });
        });
    });

    // Initialize by showing cards from the first category (Mobile Applications)
    filterButtons[0].click(); // Simulate click on the first button
});