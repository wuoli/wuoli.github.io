document.addEventListener('DOMContentLoaded', function() {
    const projectNav = document.getElementById('project-nav');
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - projectNav.offsetHeight - 60, // Adjust for navbar
                    behavior: 'smooth'
                });
            }

            // Update active button
            updateActiveButton(button);
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        let foundActive = false;

        document.querySelectorAll('.project-section').forEach(section => {
            const sectionTop = section.offsetTop - projectNav.offsetHeight - 60;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetButton = document.querySelector(`.nav-button[data-target="${section.id}"]`);
                if (targetButton) {
                    updateActiveButton(targetButton);
                    foundActive = true;
                }
            }
        });

        // If no section is found active, remove active state from all buttons
        if (!foundActive) {
            navButtons.forEach(btn => btn.classList.remove('active'));
        }
    });

    function updateActiveButton(activeButton) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }
});
