const welcomeMsg = document.getElementById('welcome-msg');

const messages = [
  "Welcome, traveler, to the Nexus.",
  "I’m Shivolon Govinder—creator of this digital realm.",
  "Grab a cup of tea and get comfortable.",
  "Dive into my collection of reflective blogs.",
  "If you've time to waste, explore my essay archive.",
  "Curious or bored? Browse through my creative portfolio.",
  "Want to know the person behind the work? Visit my profile.",
  "If you’re a tutor—may the grade reflect the journey.",
  "If you're a potential employer—why not make me part of your team?",
  "And if you’ve made it this far... hot take: Assembly programming isn't that bad.",
];




let currentIndex = 0;
let isTyping = false;

function typeMessage(message, callback) {
  let charIndex = 0;
  welcomeMsg.textContent = "";

  isTyping = true;

  const interval = setInterval(() => {
    welcomeMsg.textContent += message.charAt(charIndex);
    charIndex++;
    if (charIndex === message.length) {
      clearInterval(interval);
      isTyping = false;
      if (callback) callback();
    }
  }, 40); // typing speed in ms per character
}

function displayMessages() {
  if (currentIndex < messages.length) {
    typeMessage(messages[currentIndex], () => {
      currentIndex++;
      // Delay the typing of the next message
      setTimeout(displayMessages, 1000); // 1 second delay between messages
    });
  } else {
    welcomeMsg.style.display = "none";
  }
}

// Start typing the first message when the page loads
window.addEventListener('DOMContentLoaded', () => {
  displayMessages();
});

// Fade out the black screen on scroll
window.addEventListener('scroll', () => {
  const blackScreen = document.getElementById('black-screen');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    blackScreen.style.opacity = '0';
  } else {
    blackScreen.style.opacity = '1';
  }
});


