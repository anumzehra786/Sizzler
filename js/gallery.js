// Optional animation effect when scrolling or clicking image




 AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });


document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('zoom');
    setTimeout(() => img.classList.remove('zoom'), 500);
  });
});

  setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3000);