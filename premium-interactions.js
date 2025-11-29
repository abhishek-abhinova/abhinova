// Premium Interactions and Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced scroll reveal with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger animation
            }
        });
    }, observerOptions);
    
    // Observe all fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
    
    // Premium card hover effects
    const premiumCards = document.querySelectorAll('.preview-card, .project-card, .service-card');
    premiumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Feature tags glow effect
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = `tagGlow 2s ease-in-out infinite`;
            tag.style.animationDelay = `${index * 0.5}s`;
        }, 1000);
    });
    
    // Smooth button interactions
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (this.classList.contains('glow-btn')) {
                this.style.boxShadow = '0 0 40px rgba(14, 165, 233, 0.6), 0 0 80px rgba(14, 165, 233, 0.3)';
            }
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            if (this.classList.contains('glow-btn')) {
                this.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.4)';
            }
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.2);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        // Parallax for hero elements
        const heroElements = document.querySelectorAll('.gradient-mesh, .floating-elements');
        heroElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    });
    
    // Dynamic typing effect for hero title (subtle)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }
    
    // Project card click effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
    
    // Contact icons pulse effect
    const contactIcons = document.querySelectorAll('.contact-icon-link');
    contactIcons.forEach((icon, index) => {
        setInterval(() => {
            icon.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                icon.style.animation = '';
            }, 1000);
        }, 3000 + (index * 500));
    });
    
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes tagGlow {
            0%, 100% { box-shadow: 0 0 15px rgba(14, 165, 233, 0.2); }
            50% { box-shadow: 0 0 25px rgba(14, 165, 233, 0.4); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize premium loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
});

// Set initial body styles for smooth loading
document.body.style.opacity = '0';
document.body.style.transform = 'translateY(20px)';
document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';