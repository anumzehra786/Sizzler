  // Hide loading screen after 5 seconds
        setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3000);



  AOS.init();
