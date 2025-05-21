document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tematica-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // También manejar eventos táctiles específicamente
        card.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevenir scroll
            this.classList.toggle('flipped');
        }, {passive: false});
    });
});
