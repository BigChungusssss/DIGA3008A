document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector(".modal-image");
const modalText = modal.querySelector(".modal-text");
const closeBtn = modal.querySelector(".close");
const nextBtn = document.getElementById("next-image");
const prevBtn = document.getElementById("prev-image");

const cards = document.querySelectorAll(".image-card");

let currentIndex = 0;
let typeTimeout;

function showModal(index) {
  const card = cards[index];
  const img = card.querySelector("img");
  const text = card.querySelector(".image-sum").textContent;

  modal.style.display = "flex";
  modalImg.src = img.src;
  modalImg.alt = img.alt;

  // Clear text and stop any ongoing typing
  modalText.textContent = "";
  clearTimeout(typeTimeout);
  let i = 0;

  function type() {
    if (i < text.length) {
      modalText.textContent += text.charAt(i);
      i++;
      typeTimeout = setTimeout(type, 40);
    }
  }
  type();
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentIndex = index;
    showModal(currentIndex);
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  clearTimeout(typeTimeout);
  modalText.textContent = "";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  clearTimeout(typeTimeout);
  showModal(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  clearTimeout(typeTimeout);
  showModal(currentIndex);
});

  // your script here
});



