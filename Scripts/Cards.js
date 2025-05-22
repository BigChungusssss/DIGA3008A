const hoverTexts = [
  "Week 1: Reflection on Lee's The world-wide web",
  "Week 2: Hypertext",
  "Week 3: User alignment",
  "Week 4: Reflection on website",
  "Week 7: Analysis on SA websites",
  "Week 9: User alignment",
  "Week 10: Challenging Death of Distance",
  "Week 11: User alignment",
  "Week 12: Decolonialism",
  "Week 13: What Does an Ethical Internet Look Like to Me?",
  
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