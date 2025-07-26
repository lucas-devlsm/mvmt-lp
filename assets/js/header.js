document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const headerOpen = document.querySelector('.header-open');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        headerOpen.classList.toggle('visible');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    // Open menu when clicking menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Close menu when clicking on blur area
    headerOpen.addEventListener('click', function(e) {
        // Check if click was on the blur area (pseudo-element)
        const clickX = e.clientX;
        const menuWidth = window.innerWidth * 0.8; // 80% of viewport width

        if (clickX > menuWidth) {
            toggleMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
});
