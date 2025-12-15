// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe work items
document.querySelectorAll('.work-item').forEach(item => {
    observer.observe(item);
});

// Observe section headers
document.querySelectorAll('.section-header').forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    headerObserver.observe(header);
});

// Observe about and contact sections
document.querySelectorAll('.about-text, .contact-content').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sectionObserver.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Work item stagger animation
const workItems = document.querySelectorAll('.work-item');
workItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Mouse cursor effect for work items (optional enhancement)
const workLinks = document.querySelectorAll('.work-link');
workLinks.forEach(link => {
    const workImage = link.querySelector('.work-image');
    if (workImage) {
        workImage.addEventListener('mousemove', (e) => {
            const rect = workImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;
            
            workImage.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) scale(1.02)`;
        });
        
        workImage.addEventListener('mouseleave', () => {
            workImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        });
    }
});

// Smooth reveal on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Project page specific animations
if (document.body.classList.contains('project-page')) {
    // Project hero animation
    const projectHero = document.querySelector('.project-hero-content');
    if (projectHero) {
        projectHero.style.opacity = '0';
        projectHero.style.transform = 'translateY(30px)';
        projectHero.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            projectHero.style.opacity = '1';
            projectHero.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Project description animation
    const projectDesc = document.querySelector('.project-desc-content');
    if (projectDesc) {
        projectDesc.style.opacity = '0';
        projectDesc.style.transform = 'translateY(30px)';
        projectDesc.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const descObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        descObserver.observe(projectDesc);
    }
    
    // Gallery items animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        galleryObserver.observe(item);
    });
    
    // Project navigation animation
    const projectNav = document.querySelector('.project-nav-content');
    if (projectNav) {
        projectNav.style.opacity = '0';
        projectNav.style.transform = 'translateY(20px)';
        projectNav.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        navObserver.observe(projectNav);
    }
}

// Global Language Toggle
(function() {
    // Get saved language or default to 'kr'
    let currentLang = localStorage.getItem('portfolioLang') || 'kr';
    
    // Initialize language on page load
    function initLanguage() {
        const body = document.body;
        const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
        const langKrElements = document.querySelectorAll('.lang-kr');
        const langEnElements = document.querySelectorAll('.lang-en');
        
        // Set body data attribute
        body.setAttribute('data-lang', currentLang);
        
        // Update button states
        langToggleButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Toggle language visibility
        if (currentLang === 'kr') {
            langKrElements.forEach(el => {
                el.style.display = '';
            });
            langEnElements.forEach(el => {
                el.style.display = 'none';
            });
        } else if (currentLang === 'en') {
            langKrElements.forEach(el => {
                el.style.display = 'none';
            });
            langEnElements.forEach(el => {
                el.style.display = '';
            });
        }
    }
    
    // Initialize on page load
    initLanguage();
    
    // Language toggle button handlers
    const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
    langToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            
            if (selectedLang !== currentLang) {
                currentLang = selectedLang;
                localStorage.setItem('portfolioLang', currentLang);
                initLanguage();
            }
        });
    });
})();

// Custom Cursor (Desktop only, main page only)
if (window.matchMedia('(min-width: 769px) and (pointer: fine)').matches && !document.body.classList.contains('project-page')) {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-image, .work-link, .contact-link, .project-nav-link, .nav-link, .lang-toggle-btn');
    
    // Mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor on first move
        if (!isVisible) {
            isVisible = true;
            cursor.style.opacity = '1';
            ringX = mouseX;
            ringY = mouseY;
        }
        
        // Dot follows immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth ring movement with requestAnimationFrame
    function animateRing() {
        const ease = 0.15;
        ringX += (mouseX - ringX) * ease;
        ringY += (mouseY - ringY) * ease;
        
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        
        requestAnimationFrame(animateRing);
    }
    animateRing();
    
    // Hover effects
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        if (isVisible) {
            cursor.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseenter', () => {
        if (isVisible) {
            cursor.style.opacity = '1';
        }
    });
}

