const hoverTexts = [
  "Week 1: Reflection on Lee's The world-wide web",
  "Week 2: Hypertext",
  "Week 3: User alignment",
  "Week 4: Reflection on website",
  "Week 7: Analysis on SA websites",
  "Week 9: Refection on two articles",
  "Week 10: Close Reading",
  "Week 11: Critical Reflection",
  "Week 12: Decolonialism",
  "Week 13: What Does an Ethical Internet Look Like to Me?",
  "Week 14: How do you consider justice and ethics in your art and code?",
  
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