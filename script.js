// Simple portfolio website script
// No external dependencies - vanilla JavaScript only

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior for links
    setupSmoothScroll();
    
    // Add hover effects for interactive elements
    setupInteractiveElements();
    
    // Add page load animation
    setupPageLoadAnimation();
});

/**
 * Setup page load animation
 */
function setupPageLoadAnimation() {
    const body = document.body;
    body.style.opacity = '1';
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Setup interactive elements with enhanced hover effects
 */
function setupInteractiveElements() {
    const cards = document.querySelectorAll('.skill-tag, .project-card, .link-button');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
            this.style.transition = 'all 0.3s ease';
        });
    });
}

/**
 * Log page load completion
 */
console.log('Portfolio website loaded successfully - Light Blue Theme');

