document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    // Open modal when a project card is clicked
    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            const modalId = card.getAttribute("data-modal"); // Get the modal ID from the card's data-modal attribute
            const modal = document.getElementById(modalId); // Find the modal by its ID
            if (modal) {
                modal.style.display = "block"; // Show the modal
            }
        });
    });

    // Close modal when the close button is clicked
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal"); // Find the closest modal
            if (modal) {
                modal.style.display = "none"; // Hide the modal
            }
        });
    });

    // Close modal when clicking outside the modal content
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) { // Check if the click is on the modal background
                modal.style.display = "none"; // Hide the modal
            }
        });
    });
});