window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    // Hide transition on initial load
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        // If link has class 'no-transition', skip the animation
        if (anchor.classList.contains('no-transition')) return;
  
        e.preventDefault();
        const target = anchor.href;
  
        // Optional: set localStorage flags if needed
        if (target.includes("Portfolio.html")) {
          localStorage.setItem("visitedPortfolio", "true");
        }
  
        transition_el.classList.add('is-active');
  
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  };
  
  