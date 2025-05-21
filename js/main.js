document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    menuToggle.addEventListener('click', toggleMenu);
    // Asegura el cierre del menú overlay con el botón de cierre
    if (closeMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.preventDefault();
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Animación de entrada para los elementos del menú
    const menuItems = document.querySelectorAll('.menu-list li');
    menuItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Función para ajustar la altura del iframe de Luma
    function adjustIframeHeight() {
        const iframe = document.querySelector('.iframe-container iframe');
        if (iframe) {
            const aspectRatio = 16 / 9;
            const width = iframe.offsetWidth;
            const height = width / aspectRatio;
            iframe.style.height = `${height}px`;
        }
    }

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('load', adjustIframeHeight);
    window.addEventListener('resize', adjustIframeHeight);
});
