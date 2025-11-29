// New Homepage JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .project-showcase');
    animatedElements.forEach(el => observer.observe(el));
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Search tags interaction
    const searchTags = document.querySelectorAll('.search-tags .tag');
    const searchInput = document.querySelector('.search-input input');
    
    searchTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagText = this.textContent;
            if (searchInput) {
                searchInput.value = `I need a ${tagText.toLowerCase()}`;
                searchInput.focus();
            }
        });
    });
    
    // Testimonial cards animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Floating animation for hero icons
    function createFloatingAnimation() {
        const floatingIcons = document.querySelectorAll('.icon-item');
        floatingIcons.forEach((icon, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 4 + Math.random() * 4;
            
            icon.style.animationDelay = `${randomDelay}s`;
            icon.style.animationDuration = `${randomDuration}s`;
        });
    }
    
    createFloatingAnimation();
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-mesh, .floating-elements');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Hero title is now static - no typing effect
    
    // Add glow effect to buttons on hover
    const glowButtons = document.querySelectorAll('.neon-glow');
    glowButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.6), 0 0 100px rgba(0, 212, 255, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
        });
    });
    
    // Project image hover effect
    const projectImage = document.querySelector('.project-image');
    if (projectImage) {
        projectImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        projectImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out;
        }
        
        .service-card {
            animation: fadeInUp 0.6s ease-out;
        }
        
        .feature-card {
            animation: slideInLeft 0.6s ease-out;
        }
        
        .testimonial-card {
            animation: slideInRight 0.6s ease-out;
        }
        
        .hero-text {
            animation: slideInLeft 1s ease-out;
        }
        
        .hero-visual {
            animation: slideInRight 1s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Header scroll effect
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Initialize all animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    });
});

// Set initial body styles for loading animation
document.body.style.opacity = '0';
document.body.style.transform = 'translateY(20px)';
document.body.style.transition = 'opacity 0.5s ease, transform 0.5s ease';