const welcomeMsg = document.getElementById('welcome-msg');

const messages = [
  "The gates of knowledge open before you...",
  "Beyond these pages lie stories untold...",
  "Prepare yourself for a journey of thought...",
  "Let us begin."
];

let currentIndex = 0;

welcomeMsg.addEventListener('click', () => {
  if (currentIndex < messages.length) {
    welcomeMsg.textContent = messages[currentIndex];
    currentIndex++;
  } else {
    welcomeMsg.style.display = "none"; // hide when all messages are shown
  }
});


