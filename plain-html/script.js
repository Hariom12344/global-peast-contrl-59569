// Global Pest Solutions - Complete JavaScript
// ==========================================

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn?.querySelector('.close-icon');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (menuIcon && closeIcon) {
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }
    });

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            if (menuIcon && closeIcon) {
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
}

// Smooth Scrolling for Navigation Links
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Create email content
        const emailContent = `
New Quote Request from Global Pest Solutions Website

Customer Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Address: ${address}
- Service Needed: ${service}
- Message: ${message}

Please contact this customer as soon as possible for their pest control needs.
        `.trim();
        
        // Create mailto link
        const subject = encodeURIComponent(`New Quote Request - ${firstName} ${lastName}`);
        const body = encodeURIComponent(emailContent);
        const mailtoUrl = `mailto:globalpestsolutions9@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoUrl;
        
        // Show success toast
        showToast('Quote Request Submitted!', "We'll contact you within 2 hours during business hours.");
        
        // Reset form
        contactForm.reset();
    });
}

// Toast Notification Function
function showToast(title, message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 0.25rem;">${title}</div>
            <div style="font-size: 0.875rem; opacity: 0.9;">${message}</div>
        `;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }
}

// Navigation Background on Scroll
let lastScroll = 0;
const nav = document.getElementById('navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade In Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.card, .service-card, .pest-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Form Input Validation
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = 'var(--destructive)';
        } else {
            this.style.borderColor = 'var(--input)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--ring)';
    });
});

// Phone Number Formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
}

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prevent Multiple Form Submissions
if (contactForm) {
    let isSubmitting = false;
    contactForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }
        isSubmitting = true;
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    });
}

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.type === 'submit') {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Submitting...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 3000);
        });
    }
});

// Back to Top Button (Optional - you can add this if needed)
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: var(--transition-smooth);
        z-index: 100;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--card-shadow);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTop();

// Console Welcome Message
console.log('%cGlobal Pest Solutions', 'color: #0066cc; font-size: 24px; font-weight: bold;');
console.log('%cWebsite developed for pest control excellence', 'color: #666; font-size: 14px;');
console.log('%cContact: globalpestsolutions9@gmail.com | Phone: 7507741448', 'color: #999; font-size: 12px;');

// Performance Monitoring (Optional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    });
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Global Pest Solutions website loaded successfully!');
    
    // Add fade-in animation to hero section
    const heroElements = document.querySelectorAll('.animate-fade-in-up');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`;
        }, 100);
    });
});

// Handle external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Add active state styles to nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary);
        font-weight: 600;
    }
    
    .nav.scrolled {
        box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
    }
`;
document.head.appendChild(style);