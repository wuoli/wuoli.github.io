window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url; // Redirects to the URL specified in the card
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryTrack = document.querySelector('.gallery-track');
    const prevButton = document.querySelector('.gallery-button.prev');
    const nextButton = document.querySelector('.gallery-button.next');
  
    prevButton.addEventListener('click', function() {
      galleryTrack.scrollLeft -= 300; // Adjust scroll distance
    });
  
    nextButton.addEventListener('click', function() {
      galleryTrack.scrollLeft += 300; // Adjust scroll distance
    });
  });
  