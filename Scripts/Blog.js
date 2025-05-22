  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-btn");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        const targetId = card.getAttribute("data-modal");
        const targetModal = document.getElementById(targetId);
        if (targetModal) {
          targetModal.style.display = "block";
        }
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
      }
    });
  });


    document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-btn");

    function openModal(id) {
      modals.forEach(m => m.style.display = "none");
      const target = document.getElementById(id);
      if (target) target.style.display = "block";
    }

    cards.forEach(card => {
      card.addEventListener("click", () => {
        openModal(card.getAttribute("data-modal"));
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
      }
    });

    // Handle next/previous blog buttons
    document.querySelectorAll(".next-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const nextId = btn.getAttribute("data-next");
        openModal(nextId);
      });
    });

    document.querySelectorAll(".prev-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const prevId = btn.getAttribute("data-prev");
        openModal(prevId);
      });
    });
  });