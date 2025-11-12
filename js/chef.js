// Scroll animation for chef cards
const chefCards = document.querySelectorAll('[data-animate]');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  chefCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

  setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3000);
