  window.addEventListener('scroll', () => {
    const blackScreen = document.getElementById('black-screen');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      blackScreen.style.opacity = '0';
    } else {
      blackScreen.style.opacity = '1';
    }
  });