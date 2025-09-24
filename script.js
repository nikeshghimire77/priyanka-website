// Simple JavaScript for the website

// No client email library needed when using FormSubmit (native POST)

// Make mobile menu functions globally available immediately
window.toggleMobileMenu = function () {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.getElementById('mobileToggle');

    if (navLinks && mobileToggle) {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            // Fallback show if CSS is not applied
            const display = window.getComputedStyle(navLinks).display;
            if (display === 'none') {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
            }
            mobileToggle.setAttribute('aria-expanded', 'true');
        } else {
            document.body.style.overflow = '';
            navLinks.style.display = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    }
};

window.closeMobileMenu = function () {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.getElementById('mobileToggle');

    if (navLinks && mobileToggle) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Make functions globally available
window.openModal = function () {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Lightweight toast notifications
function showToast(message, variant = 'success') {
    let container = document.getElementById('globalToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'globalToastContainer';
        container.style.position = 'fixed';
        container.style.left = '50%';
        container.style.bottom = '24px';
        container.style.transform = 'translateX(-50%)';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '10px';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.minWidth = '280px';
    toast.style.maxWidth = '90vw';
    toast.style.padding = '14px 16px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    toast.style.fontSize = '14px';
    toast.style.lineHeight = '1.4';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 300ms ease';

    if (variant === 'success') {
        toast.style.background = '#e8f7ee';
        toast.style.color = '#155724';
        toast.style.border = '1px solid #b7e4c7';
        toast.textContent = message;
    } else if (variant === 'error') {
        toast.style.background = '#fdecea';
        toast.style.color = '#611a15';
        toast.style.border = '1px solid #f5c2c0';
        toast.textContent = message;
    } else {
        toast.style.background = '#eef2ff';
        toast.style.color = '#1e3a8a';
        toast.style.border = '1px solid #c7d2fe';
        toast.textContent = message;
    }

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.style.marginLeft = '8px';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'transparent';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.lineHeight = '1';
    closeBtn.style.color = 'inherit';
    closeBtn.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    textSpan.style.flex = '1';

    toast.textContent = '';
    toast.appendChild(textSpan);
    toast.appendChild(closeBtn);

    container.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    // Auto-dismiss after 5s
    setTimeout(() => {
        if (!toast.isConnected) return;
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
    }, 5000);
}

window.closeModal = function () {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.style.overflow = '';
    }
};

window.openSelfCheckModal = function () {
    const modal = document.getElementById('selfCheckModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeSelfCheckModal = function () {
    const modal = document.getElementById('selfCheckModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.style.overflow = '';
    }
};

// Remove JS interception for form submit; native POST will handle it
delete window.handleFormSubmit;

// Test function to verify JavaScript is working
function testFunction() {
    alert('JavaScript is working!');
}

// Debug navbar visibility
function debugNavbar() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        console.log('Nav links found:', navLinks);
        console.log('Nav links display:', window.getComputedStyle(navLinks).display);
        console.log('Nav links classes:', navLinks.className);
    } else {
        console.log('Nav links NOT found!');
    }
}

// Self-Check Modal Functions
function openSelfCheckModal() {
    const modal = document.getElementById('selfCheckModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSelfCheckModal() {
    const modal = document.getElementById('selfCheckModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.style.overflow = '';
        console.log('Self-check modal closed successfully!');
    }
}

function calculateScore() {
    const checkboxes = document.querySelectorAll('#selfCheckModal input[type="checkbox"]:checked');
    const score = checkboxes.length;

    // Update score display
    document.getElementById('scoreNumber').textContent = score;

    // Generate recommendation based on score
    let recommendation = '';
    let recommendationText = '';

    if (score === 0) {
        recommendation = 'Great News!';
        recommendationText = 'Based on your responses, you appear to have healthy breathing and oral function patterns. Keep up the good work!';
    } else if (score >= 1 && score <= 3) {
        recommendation = 'Mild Concerns';
        recommendationText = 'You may benefit from a consultation to discuss some breathing or oral function patterns. Early intervention can prevent future issues.';
    } else if (score >= 4 && score <= 7) {
        recommendation = 'Moderate Concerns';
        recommendationText = 'Your responses suggest several areas where myofunctional therapy could be beneficial. We recommend scheduling a consultation to discuss your specific needs.';
    } else if (score >= 8) {
        recommendation = 'Significant Concerns';
        recommendationText = 'Your responses indicate multiple areas that could benefit from myofunctional therapy. We strongly recommend scheduling a consultation to create a personalized treatment plan.';
    }

    // Update recommendation display
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerHTML = `
        <h4>${recommendation}</h4>
        <p>${recommendationText}</p>
    `;

    // Show results section
    document.getElementById('resultsSection').style.display = 'block';

    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If section doesn't exist, open self-check modal
        openSelfCheckModal();
    }
}

// Modal functionality - SIMPLIFIED
function openModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.style.overflow = '';
        console.log('Modal closed successfully!');
    }
}

// Close modal when clicking outside
function closeModalOnOutsideClick(event) {
    const modal = document.getElementById('consultationModal');
    if (modal && event.target === modal) {
        closeModal();
    }
}

// Form submission handling
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Basic front-end validation for email if present
    const email = formData.get('email') || formData.get('from_email');
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    }

    // Get form data for EmailJS
    const templateParams = {
        from_name: formData.get('name') || formData.get('from_name') || 'Unknown',
        from_email: email || 'No email provided',
        phone: formData.get('phone') || 'Not provided',
        message: formData.get('message') || formData.get('concerns') || 'No message provided',
        concerns: formData.get('concerns') || formData.get('primary_concern') || 'Not specified',
        to_email: 'themyonest@gmail.com'
    };

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    }

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            templateParams
        );

        if (response.status === 200) {
            alert('Thank you! Your message has been sent. We will contact you within 24 hours.');
            form.reset();
            if (typeof closeModal === 'function') {
                closeModal();
            }
        } else {
            throw new Error('Email service error');
        }
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Sorry, there was a problem sending your message. Please try again or contact us directly at themyonest@gmail.com');
    } finally {
        // Reset button state
        if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.getElementById('mobileToggle');

    if (navLinks && mobileToggle) {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            const display = window.getComputedStyle(navLinks).display;
            if (display === 'none') {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
            }
            mobileToggle.setAttribute('aria-expanded', 'true');
        } else {
            document.body.style.overflow = '';
            navLinks.style.display = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    }
}

// Make function globally available
window.toggleMobileMenu = toggleMobileMenu;

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.getElementById('mobileToggle');

    if (navLinks && mobileToggle) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
        navLinks.style.display = '';
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
}

// Make function globally available
window.closeMobileMenu = closeMobileMenu;

// Close mobile menu when clicking outside
function closeMobileMenuOnOutsideClick(event) {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.getElementById('mobileToggle');

    if (navLinks && mobileToggle &&
        !navLinks.contains(event.target) &&
        !mobileToggle.contains(event.target) &&
        navLinks.classList.contains('active')) {
        closeMobileMenu();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Debug navbar
    debugNavbar();

    // Mobile menu initialization
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Avoid double-binding; mobile toggle uses inline onclick in HTML

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', closeMobileMenuOnOutsideClick);

    // Close mobile menu on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Modal initialization
    const modal = document.getElementById('consultationModal');
    if (modal) {
        // Close modal when clicking outside
        modal.addEventListener('click', closeModalOnOutsideClick);

        // Close modal with Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // Convert Formspree forms to AJAX to avoid redirect
    function enableFormspreeAjax() {
        const forms = Array.from(document.querySelectorAll('form'))
            .filter(f => (f.getAttribute('action') || '').includes('formspree.io'));

        forms.forEach(form => {
            // Avoid duplicate binding
            if (form.__formspreeBound) return;
            form.__formspreeBound = true;

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const action = form.getAttribute('action');
                const formData = new FormData(form);

                // Button loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn ? submitBtn.textContent : '';
                if (submitBtn) {
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                }

                // Ensure we receive JSON and not a redirect page
                try {
                    const resp = await fetch(action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    // Message container
                    let msg = form.querySelector('.form-feedback');
                    if (!msg) {
                        msg = document.createElement('div');
                        msg.className = 'form-feedback';
                        msg.style.marginTop = '12px';
                        msg.style.padding = '12px 14px';
                        msg.style.borderRadius = '8px';
                        msg.style.fontSize = '14px';
                        form.appendChild(msg);
                    }

                    if (resp.ok) {
                        showToast('Thank you! Your message has been sent. We will contact you within 24 hours.', 'success');
                        form.reset();
                        // Close modal if applicable
                        if (typeof closeModal === 'function' && form.classList.contains('modal-form')) {
                            closeModal();
                        }
                    } else {
                        showToast('Sorry, there was a problem sending your message. Please try again.', 'error');
                    }
                } catch (err) {
                    showToast('Network error. Please check your connection and try again.', 'error');
                } finally {
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                }
            });
        });
    }

    enableFormspreeAjax();

    // Add click handlers to all "Book Free Consultation" buttons
    const consultationButtons = document.querySelectorAll('[onclick="openModal()"]');
    consultationButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            openModal();
        });
    });
});


// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('consultationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for anchor links
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

// Form submission
// Removed generic alert-only submit handler; handled by handleFormSubmit

// Animated counter for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Add some simple animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.problem-card, .step, .service-card, .feature-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

    // Animate counters
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(stat => {
        const elementTop = stat.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible && !stat.classList.contains('animated')) {
            stat.classList.add('animated');
            const target = parseInt(stat.getAttribute('data-count'));
            animateCounter(stat, target);
        }
    });
}

// Testimonial Slider
let currentSlide = 0;
let slideInterval;

function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length === 0) {
        return;
    }

    function showSlide(index) {
        // Hide all testimonials
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
        });

        // Remove active class from all dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
        });

        // Show current testimonial
        if (testimonials[index]) {
            testimonials[index].classList.add('active');
        }

        if (dots[index]) {
            dots[index].classList.add('active');
        }

        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % testimonials.length;
        showSlide(next);
    }

    // Show first slide immediately
    showSlide(0);

    // Auto-slide every 3 seconds
    slideInterval = setInterval(nextSlide, 3000);

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            // Restart auto-slide
            slideInterval = setInterval(nextSlide, 3000);
        });
    });
}

// Test function for manual testing
function testSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length > 0) {
        const next = (currentSlide + 1) % testimonials.length;

        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show next testimonial
        testimonials[next].classList.add('active');
        dots[next].classList.add('active');

        currentSlide = next;
    }
}

// Make test function available globally
window.testSlider = testSlider;

// Testimonial slider functionality
// Reuse currentSlide from above; only declare the interval here
let testimonialInterval;

function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length === 0) return;

    // Show first testimonial
    showSlide(0);

    // Auto-advance slides every 5 seconds
    testimonialInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Pause on hover
    const slider = document.querySelector('.testimonial-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        slider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        });
    }
}

function showSlide(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length === 0) return;

    // Remove active class from all testimonials and dots
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Add active class to current slide
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }

    if (dots[index]) {
        dots[index].classList.add('active');
    }

    currentSlide = index;
}

function nextSlide() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length === 0) return;

    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function () {
    // Initialize testimonial slider
    initTestimonialSlider();

    // Set initial state for animated elements
    const elements = document.querySelectorAll('.problem-card, .step, .service-card, .feature-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Initialize testimonial slider
    initTestimonialSlider();

    // Trigger animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});