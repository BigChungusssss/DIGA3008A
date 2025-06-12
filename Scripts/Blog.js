document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close-btn");

  // Function to open modal and prevent background scroll
  function openModal(id) {
    modals.forEach(m => m.style.display = "none");
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
      document.body.classList.add("no-scroll"); // Disable background scroll
    }
  }

  // Function to close modal and re-enable scroll
  function closeModal(modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); // Re-enable scroll
  }

  // Open modal when clicking a card
  cards.forEach(card => {
    card.addEventListener("click", () => {
      openModal(card.getAttribute("data-modal"));
    });
  });

  // Close modal when clicking close button
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal);
    });
  });

  // Close modal when clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target);
    }
  });

  // Handle next modal button
  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextId = btn.getAttribute("data-next");
      openModal(nextId);
    });
  });

  // Handle previous modal button
  document.querySelectorAll(".prev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const prevId = btn.getAttribute("data-prev");
      openModal(prevId);
    });
  });
});
