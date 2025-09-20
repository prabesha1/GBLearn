// Modern Interactions and Animations for Apple-Inspired Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initParallaxEffect();
    initSmoothAnimations();
    initInteractiveElements();
    initTooltips();
    initMouseEffects();
    initDynamicShapes();
});

// Parallax effect for floating shapes
function initParallaxEffect() {
    const getShapes = () => document.getElementsByClassName('shape');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        const shapes = Array.from(getShapes());

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            shape.style.transform = `translate(${x}px, ${y}px) rotate(${mouseX * 360}deg)`;
        });
    });
}

// Add more vivid, random floating shapes on the home page only
function initDynamicShapes() {
    const isHome = document.body.classList.contains('home-page');
    if (!isHome) return;
    const container = document.querySelector('.floating-shapes');
    if (!container) return;

    const colors = [
        ['rgba(0,122,255,0.35)', 'rgba(175,82,222,0.35)'],
        ['rgba(24,119,242,0.35)', 'rgba(66,165,245,0.35)'],
        ['rgba(255,45,146,0.30)', 'rgba(255,149,0,0.30)'],
        ['rgba(90,200,250,0.30)', 'rgba(175,82,222,0.35)'],
        ['rgba(52,199,89,0.30)', 'rgba(0,122,255,0.30)']
    ];

    const extraCount = 20; // number of extra bubbles on home
    for (let i = 0; i < extraCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'shape dynamic-shape parallax-shape';

        // random size and position
        const size = Math.floor(40 + Math.random() * 140); // 40–180px
        const top = Math.floor(Math.random() * 90); // 0–90%
        const left = Math.floor(Math.random() * 90);

        // random animation speed and delay
        const duration = (14 + Math.random() * 18).toFixed(1); // 14–32s
        const delay = (-1 * Math.random() * 18).toFixed(1); // negative for stagger

        // pick a gradient pair
        const pair = colors[Math.floor(Math.random() * colors.length)];

        bubble.style.cssText = `
            width:${size}px; height:${size}px;
            top:${top}%; left:${left}%;
            animation: float ${duration}s infinite linear;
            animation-delay:${delay}s;
            background: linear-gradient(45deg, ${pair[0]}, ${pair[1]});
            opacity: 0.5;
        `;

        container.appendChild(bubble);
    }
}

// Smooth animations on scroll with bounce effects
function initSmoothAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered bounce animation
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.classList.add('bounce-in');
                }, index * 200);
            }
        });
    }, observerOptions);
    
    // Observe all glass cards and elements
    const elements = document.querySelectorAll('.glass-card, .contact-item, .skill-item, .social-link');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) scale(0.8)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
    
    // Add bounce animation class
    const style = document.createElement('style');
    style.textContent = `
        .bounce-in {
            animation: bounceInUp 0.8s ease-out !important;
        }
    `;
    document.head.appendChild(style);
}

// Interactive elements with hover effects
function initInteractiveElements() {
    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    const imageWrapper = document.querySelector('.image-wrapper');
    
    if (profileImage && imageWrapper) {
        imageWrapper.addEventListener('mouseenter', () => {
            profileImage.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        imageWrapper.addEventListener('mouseleave', () => {
            profileImage.style.filter = 'brightness(1) contrast(1)';
        });
    }
    
    // Skill items interactive effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Contact items hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 10px 30px rgba(0, 122, 255, 0.4)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = 'none';
            }
        });
    });
}

// Tooltip functionality
function initTooltips() {
    const socialLinks = document.querySelectorAll('.social-link[data-tooltip]');
    
    socialLinks.forEach(link => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = link.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1000;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 8px;
        `;
        
        link.style.position = 'relative';
        link.appendChild(tooltip);
        
        link.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });
        
        link.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

// Mouse cursor effects
function initMouseEffects() {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #007AFF, #AF52DE);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Show cursor when mouse enters window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .contact-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'linear-gradient(135deg, #FF2D92, #FF9500)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'linear-gradient(135deg, #007AFF, #AF52DE)';
        });
    });
}

// Typing animation for name
function initTypingAnimation() {
    const nameElement = document.querySelector('.name-highlight');
    if (!nameElement) return;
    
    const text = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.borderRight = '3px solid rgba(255, 255, 255, 0.8)';
    nameElement.style.animation = 'blink 1s infinite';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 120);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                nameElement.style.borderRight = 'none';
                nameElement.style.animation = 'none';
            }, 1000);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1500);
}

// Initialize typing animation
setTimeout(initTypingAnimation, 500);

// Smooth scroll for anchor links
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

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add ripple effect to buttons and links
function createRipple(event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    // Add ripple animation keyframes if not already added
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to interactive elements
document.querySelectorAll('.social-link, .contact-item, .skill-item').forEach(element => {
    element.addEventListener('click', createRipple);
});

// Performance optimization: Throttle scroll events
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

// Add scroll-based animations with bounce effects
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-animation');
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Add bounce effect to elements based on scroll position
    const elements = document.querySelectorAll('.glass-card, .contact-item, .skill-item');
    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrollProgress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
            const bounceScale = 1 + (Math.sin(scrollProgress * Math.PI) * 0.05);
            element.style.transform = `translateY(${scrollProgress * 10}px) scale(${bounceScale})`;
        }
    });
}, 16));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyles = document.createElement('style');
focusStyles.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #007AFF !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(focusStyles);
