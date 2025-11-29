// Futuristic Abhinova JavaScript - 2025 Edition

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initScrollAnimations();
    initStatsCounter();
    initMagneticButtons();
    initParticleSystem();
    initScrollToTop();
    initMobileMenu();
    initTimelineAnimation();
    initTechStackHover();
    initGlitchEffect();
    initCursorTrail();
    initSmoothScrolling();
    initLazyLoading();
    initThemeToggle();
    initFAQAccordion();
    initPremiumEffects();
    initFloatingIcons();
    initTypewriterEffect();
    initCodeAnimation();
});

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Load saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('light-theme');
            const icon = themeToggle.querySelector('.theme-icon');
            const isLight = document.body.classList.contains('light-theme');
            
            icon.textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stat-item')) {
                    animateStatNumber(entry.target);
                }
                
                if (entry.target.classList.contains('timeline-step')) {
                    animateTimelineStep(entry.target);
                }
                
                if (entry.target.classList.contains('tech-item')) {
                    animateTechItem(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .solution-card, .feature-item, .project-card, .testimonial-card,
        .stat-item, .timeline-step, .tech-item, .faq-item, .contact-item
    `);
    
    animatableElements.forEach(el => observer.observe(el));
}

// Animated Stats Counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number, .stat-number-modern, .stat-number-new, .stat-number-right');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        if (!target) return;
        
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        let hasAnimated = false;
        
        const updateCounter = () => {
            if (hasAnimated) return;
            hasAnimated = true;
            
            const animate = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(animate);
                } else {
                    stat.textContent = target;
                }
            };
            animate();
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    updateCounter();
                }
            });
        }, { threshold: 0.5 });
        
        const container = stat.closest('.stat-item') || stat.closest('.stat-card') || stat.closest('.stat-item-new') || stat.closest('.stat-item-right') || stat.parentElement;
        if (container) {
            observer.observe(container);
        }
    });
}

// Magnetic Button Effects
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
        
        // Add rubber band effect on click
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            }, 100);
        });
    });
}

// Enhanced Particle System
function initParticleSystem() {
    const particleContainer = document.querySelector('.floating-particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
    
    const agencyIcons = ['⚡', '💎', '🔥', '✨', '💫'];
    agencyIcons.forEach((icon, index) => {
        createIconParticle(particleContainer, icon, index);
    });
}

function createIconParticle(container, icon, index) {
    const particle = document.createElement('div');
    particle.textContent = icon;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = 15 + Math.random() * 10;
    
    particle.style.cssText = `position: absolute; font-size: 1.5rem; left: ${x}px; top: ${y}px; animation: iconFloat ${duration}s ease-in-out infinite; animation-delay: ${index * 2}s; opacity: 0.3; pointer-events: none; z-index: 1;`;
    
    container.appendChild(particle);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 3;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 8;
    
    const colors = ['#00f5ff', '#8a2be2', '#ff1493', '#39ff14', '#ff6600', '#00ffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `position: absolute; width: ${size}px; height: ${size}px; background: radial-gradient(circle, ${color}, transparent); border-radius: 50%; left: ${x}px; top: ${y}px; animation: particleFloat ${duration}s ease-in-out infinite; animation-delay: ${delay}s; opacity: 0.8; pointer-events: none; box-shadow: 0 0 ${size * 2}px ${color}; z-index: 1;`;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (duration + delay) * 1000);
}

// Modern FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item-modern');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-modern');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// AI Assistant Simulation
function initAIAssistant() {
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatContainer = document.querySelector('.chat-container');
    
    if (!chatInput || !sendBtn || !chatContainer) return;
    
    const responses = [
        "Great! For restaurants, I recommend a modern website with online menu, reservation system, and food ordering integration. Would you like to see some examples?",
        "Perfect! E-commerce businesses need product catalogs, payment gateways, and inventory management. Our solutions start from ₹50,000.",
        "Excellent choice! Service businesses benefit from appointment booking, client portals, and automated follow-ups. Let me show you our packages.",
        "For startups, we recommend MVP websites with growth-ready features. Our startup package includes branding + website for ₹35,000.",
        "Healthcare businesses need HIPAA-compliant solutions with patient portals and appointment systems. We specialize in secure medical websites."
    ];
    
    function addMessage(text, isUser = false) {
        const message = document.createElement('div');
        message.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        
        message.innerHTML = `
            <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        
        chatContainer.appendChild(message);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        chatInput.value = '';
        
        // Show typing indicator
        const typingMessage = document.createElement('div');
        typingMessage.className = 'chat-message bot typing';
        typingMessage.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatContainer.appendChild(typingMessage);
        
        // Simulate AI response
        setTimeout(() => {
            typingMessage.remove();
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse);
        }, 2000);
    }
    
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Timeline Animation
function initTimelineAnimation() {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const step = entry.target;
                const stepNumber = step.getAttribute('data-step');
                
                // Animate step with delay
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, stepNumber * 200);
            }
        });
    }, { threshold: 0.5 });
    
    timelineSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'all 0.6s ease-out';
        observer.observe(step);
    });
}

// Tech Stack Hover Effects
function initTechStackHover() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const techName = item.getAttribute('data-tech');
            
            // Create floating tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tech-tooltip';
            tooltip.textContent = `Click to learn more about ${techName}`;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 245, 255, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 500;
                pointer-events: none;
                z-index: 1000;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            // Position tooltip
            const rect = item.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.bottom + 10 + 'px';
            
            // Animate in
            requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            });
            
            // Store reference for cleanup
            item._tooltip = tooltip;
        });
        
        item.addEventListener('mouseleave', () => {
            if (item._tooltip) {
                item._tooltip.remove();
                item._tooltip = null;
            }
        });
    });
}

// Glitch Effect for Hero Text
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.animation = 'none';
            glitchText.offsetHeight; // Trigger reflow
            glitchText.style.animation = 'glitch 0.3s ease-in-out';
        }
    }, 100);
}

// Cursor Trail Effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00f5ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateTrail() {
        trail.forEach((dot, index) => {
            if (index === 0) {
                dot.style.left = mouseX + 'px';
                dot.style.top = mouseY + 'px';
            } else {
                const prevDot = trail[index - 1];
                const prevX = parseFloat(prevDot.style.left);
                const prevY = parseFloat(prevDot.style.top);
                
                dot.style.left = prevX + 'px';
                dot.style.top = prevY + 'px';
            }
        });
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });
}

// Utility Functions
function animateStatNumber(statItem) {
    const number = statItem.querySelector('.stat-number');
    const target = parseInt(number.getAttribute('data-target'));
    
    let current = 0;
    const increment = target / 60; // 1 second at 60fps
    
    const updateNumber = () => {
        if (current < target) {
            current += increment;
            number.textContent = Math.ceil(current);
            requestAnimationFrame(updateNumber);
        } else {
            number.textContent = target;
        }
    };
    
    updateNumber();
}

function animateTimelineStep(step) {
    const stepNumber = step.querySelector('.step-number');
    const stepContent = step.querySelector('.step-content');
    
    // Animate step number
    stepNumber.style.transform = 'scale(1.2)';
    stepNumber.style.background = 'linear-gradient(135deg, #00f5ff, #8a2be2)';
    
    setTimeout(() => {
        stepNumber.style.transform = 'scale(1)';
    }, 300);
    
    // Animate content
    stepContent.style.transform = 'translateX(20px)';
    setTimeout(() => {
        stepContent.style.transform = 'translateX(0)';
    }, 200);
}

function animateTechItem(item) {
    const icon = item.querySelector('.tech-icon');
    const name = item.querySelector('.tech-name');
    
    // Rotate icon
    icon.style.transform = 'rotateY(360deg)';
    
    // Glow effect
    item.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.5)';
    
    setTimeout(() => {
        icon.style.transform = 'rotateY(0deg)';
        item.style.boxShadow = 'none';
    }, 600);
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
    // Update navbar background opacity based on scroll
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    const opacity = Math.min(scrolled / 100, 0.95);
    navbar.style.background = `rgba(10, 10, 10, ${opacity})`;
    
    // Parallax effect for hero orbs
    const orbs = document.querySelectorAll('.neon-orb');
    orbs.forEach((orb, index) => {
        const speed = 0.5 + index * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16)); // ~60fps

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#39ff14' : type === 'error' ? '#ff1493' : '#00f5ff'};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Premium CSS animations
const premiumCSS = `
@keyframes particleFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
    25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
    50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
    75% { transform: translateY(-20px) rotate(270deg); opacity: 1; }
}
@keyframes iconFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(90deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
    75% { transform: translateY(-30px) rotate(270deg); }
}
.glassmorphism {
    backdrop-filter: blur(25px) saturate(180%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Enhanced FAQ Styles */
.faq-modern {
    background: linear-gradient(135deg, rgba(0, 245, 255, 0.02) 0%, rgba(138, 43, 226, 0.02) 100%);
    position: relative;
    overflow: hidden;
}

.faq-grid {
    display: grid;
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.faq-item-modern {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 245, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s ease;
}

.faq-item-modern:hover {
    border-color: rgba(0, 245, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 245, 255, 0.1);
    transform: translateY(-2px);
}

.faq-question-modern {
    padding: 25px 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    transition: all 0.3s ease;
}

.faq-question-modern:hover {
    background: rgba(0, 245, 255, 0.05);
}

.faq-toggle-modern {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00f5ff, #8a2be2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.faq-item-modern.active .faq-toggle-modern {
    transform: rotate(45deg);
    background: linear-gradient(135deg, #ff1493, #8a2be2);
}

.faq-answer-modern {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.faq-item-modern.active .faq-answer-modern {
    max-height: 200px;
}

.faq-answer-modern p {
    padding: 0 30px 25px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
}

/* Enhanced Footer Styles */
.footer {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    border-top: 1px solid rgba(0, 245, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00f5ff, #8a2be2, #ff1493, transparent);
    animation: footerGlow 3s ease-in-out infinite;
}

@keyframes footerGlow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

.footer-brand {
    padding: 30px;
    background: rgba(0, 245, 255, 0.03);
    border-radius: 16px;
    border: 1px solid rgba(0, 245, 255, 0.1);
    margin-bottom: 20px;
}

.footer-brand h3::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #00f5ff, #8a2be2);
    border-radius: 2px;
}

.footer-links {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-column h4 {
    color: #00f5ff;
    position: relative;
    padding-bottom: 10px;
}

.footer-column h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00f5ff, #8a2be2);
}

.footer-column a {
    padding: 8px 0 8px 15px;
    position: relative;
    transition: all 0.3s ease;
}

.footer-column a::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #00f5ff;
    font-size: 0.7rem;
    opacity: 0;
    transition: all 0.3s ease;
}

.footer-column a:hover {
    color: #00f5ff;
    padding-left: 20px;
}

.footer-column a:hover::before {
    opacity: 1;
}

.footer-bottom {
    background: rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(0, 245, 255, 0.1);
    margin-top: 40px;
    padding: 25px 0;
}
`;

const style = document.createElement('style');
style.textContent = premiumCSS;
document.head.appendChild(style);



// Add loading screen with attractive welcome message
document.addEventListener('DOMContentLoaded', function() {
    // Hide website content
    document.body.style.overflow = 'hidden';
    
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="welcome-message">
                <h1 class="welcome-title">Welcome to Abhinova</h1>
                <p class="welcome-subtitle">✨ Crafting Digital Excellence ✨</p>
                <div class="welcome-tagline">Where Innovation Meets Design</div>
            </div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    // Add premium loader CSS
    const loaderCSS = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.8s ease;
        }
        .loader-content {
            text-align: center;
            animation: loaderFadeIn 1s ease-out;
        }
        .welcome-message {
            margin-bottom: 40px;
        }
        .welcome-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00f5ff, #8a2be2, #ff1493);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
            animation: titleGlow 2s ease-in-out infinite;
        }
        .welcome-subtitle {
            font-size: 1.2rem;
            color: #b0b0b0;
            margin-bottom: 10px;
            animation: subtitleFloat 3s ease-in-out infinite;
        }
        .welcome-tagline {
            font-size: 0.9rem;
            color: #00f5ff;
            font-weight: 500;
            opacity: 0.8;
        }
        .loader-bar {
            width: 300px;
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto;
        }
        .loader-progress {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #00f5ff, #8a2be2, #ff1493);
            animation: loadProgress 5s ease-out forwards;
        }
        @keyframes loaderFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes titleGlow {
            0%, 100% { text-shadow: 0 0 20px rgba(0,245,255,0.5); }
            50% { text-shadow: 0 0 40px rgba(138,43,226,0.8); }
        }
        @keyframes subtitleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        @keyframes loadProgress {
            to { width: 100%; }
        }
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = loaderCSS;
    document.head.appendChild(loaderStyle);
    
    document.body.appendChild(loader);
    
    // Remove loader after 5 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
            loaderStyle.remove();
            document.body.style.overflow = 'auto';
        }, 800);
    }, 3000);
});

// Premium Effects
function initPremiumEffects() {
    const hero = document.querySelector('.hero');
    const premiumGlow = document.createElement('div');
    premiumGlow.className = 'premium-glow';
    premiumGlow.style.cssText = 'position: absolute; top: 20%; right: 10%; z-index: -1;';
    hero.appendChild(premiumGlow);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        premiumGlow.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
    });
}

// Floating Agency Icons
function initFloatingIcons() {
    const icons = ['💻', '🎨', '📱', '⚡', '🚀', '💡', '🔥', '✨'];
    const hero = document.querySelector('.hero');
    
    icons.forEach((icon, index) => {
        const floatingIcon = document.createElement('div');
        floatingIcon.textContent = icon;
        floatingIcon.style.cssText = `position: absolute; font-size: 2rem; opacity: 0.1; pointer-events: none; animation: iconFloat ${8 + index}s ease-in-out infinite; animation-delay: ${index * 0.5}s; top: ${20 + Math.random() * 60}%; left: ${10 + Math.random() * 80}%; z-index: 1;`;
        hero.appendChild(floatingIcon);
    });
}

// Typewriter Effect
function initTypewriterEffect() {
    const titleElement = document.querySelector('.hero-title-new');
    if (!titleElement) return;
    
    const originalText = titleElement.innerHTML;
    titleElement.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            titleElement.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Code Animation
function initCodeAnimation() {
    const codeLines = document.querySelectorAll('.code-line');
    
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 2000 + index * 200);
    });
}

console.log('🚀 Welcome to Abhinova - Premium Digital Agency!');
console.log('💫 All premium animations ready!');
console.log('🎨 Crafting Digital Excellence with Love');