console.log("hola carlita");

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('primary-menu');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Verifica el estado actual para la accesibilidad
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Alterna el atributo ARIA para lectores de pantalla
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Alterna las clases visuales de animación y visualización
            menuToggle.classList.toggle('is-active');
            mainNav.classList.toggle('is-open');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Carrusel ---
    const carousel = document.getElementById('destacados-carousel');
    const btnPrev = document.querySelector('.carousel-control.prev');
    const btnNext = document.querySelector('.carousel-control.next');

    if (carousel && btnPrev && btnNext) {
        const getScrollAmount = () => {
            const item = carousel.querySelector('.carousel-item');
            const style = window.getComputedStyle(carousel);
            const gap = parseInt(style.getPropertyValue('gap')) || 0;
            return item.clientWidth + gap;
        };

        btnNext.addEventListener('click', () => {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }
});