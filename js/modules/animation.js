export const animateMenu = (timestamp) => {
  const menu = document.querySelector('.header__menu');
  const duration = 500;
  const start = performance.now();

  const animationStep = (currentTime) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    menu.style.opacity = progress;

    if (progress < 1) {
      requestAnimationFrame(animationStep);
    }
  };

  requestAnimationFrame(animationStep);
};


