const hoverTexts = [
  "Essay 1: Analysing UI, UX and Ethical Considerations of a South African Website",
  "Essay 2: In progress",

  
];

document.querySelectorAll('#blog-nav .blog-card').forEach((card, index) => {
  const message = hoverTexts[index % hoverTexts.length]; // loop messages
  const textElement = card.querySelector('.blog-hover-text');
  let typingInterval;
  let isTyping = false;

  card.addEventListener('mouseenter', () => {
    if (isTyping) return;
    isTyping = true;
    let i = 0;
    textElement.textContent = "";

    typingInterval = setInterval(() => {
      textElement.textContent += message.charAt(i);
      i++;
      if (i >= message.length) {
        clearInterval(typingInterval);
        isTyping = false;
      }
    }, 40);
  });

  card.addEventListener('mouseleave', () => {
    clearInterval(typingInterval);
    textElement.textContent = "";
    isTyping = false;
  });
});