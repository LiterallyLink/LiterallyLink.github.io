document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('.nav-content');

    menuToggle.addEventListener('click', () => {
        navContent.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        
        // Animate hamburger menu
        spans[0].style.transform = navContent.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 5px)' 
            : 'none';
        spans[1].style.opacity = navContent.classList.contains('active') 
            ? '0' 
            : '1';
        spans[2].style.transform = navContent.classList.contains('active') 
            ? 'rotate(-45deg) translate(7px, -7px)' 
            : 'none';
    });
});