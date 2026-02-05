// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle parallax effect to hero text on mouse move
const hero = document.querySelector('main');
const heroTitle = document.querySelector('h1');

if (hero && heroTitle) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;
        
        heroTitle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
    
    hero.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'translate(0, 0)';
    });
}

// Add transition to hero title
if (heroTitle) {
    heroTitle.style.transition = 'transform 0.3s ease-out';
}