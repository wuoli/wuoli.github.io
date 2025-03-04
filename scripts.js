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
  

function sendMessage(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const subject = `Message from ${name}`;
    const body = `${message}`;
    
    window.location.href = `mailto:oliviawu27@g.ucla.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

let currentAudio = null; // Store currently playing audio

function playAudio(src) {
    // If an audio is playing
    if (currentAudio) {
        if (!currentAudio.paused && currentAudio.getAttribute("data-src") === src) {
            // Scenario 1: Stop audio if the same section is clicked
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
            return;
        } else {
            // Scenario 2: Stop current audio and play new section audio
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    // Scenario 3: Play audio if no audio is playing
    currentAudio = new Audio(src);
    currentAudio.setAttribute("data-src", src); // Store source for comparison
    currentAudio.play();
}


