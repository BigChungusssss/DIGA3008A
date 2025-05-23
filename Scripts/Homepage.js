  const hoverTexts = [
  "Read some blogs",
  "Want to see the behind the scenes",
  "If you have the time",
  "Go check out my projects, i just have my artworks posted",
  
,
  
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