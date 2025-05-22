const modal = document.getElementById("image-modal");
const modalImg = modal.querySelector(".modal-image");
const modalText = modal.querySelector(".modal-text");
const closeBtn = modal.querySelector(".close");

document.querySelectorAll(".image-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const text = card.querySelector(".image-sum").textContent;

    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalText.textContent = "";

    // Typing animation
    let i = 0;
    const type = () => {
      if (i < text.length) {
        modalText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    };
    type();
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

