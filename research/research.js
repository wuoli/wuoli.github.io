document.addEventListener('DOMContentLoaded', function() {
    const hasPlayed = localStorage.getItem('hasPlayed');
    const video = document.getElementById('hero-video');

    if (!hasPlayed) {
      video.play(); // Play video on first visit
      localStorage.setItem('hasPlayed', 'true');
    }
  });