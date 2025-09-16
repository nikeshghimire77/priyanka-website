// Simple JavaScript for the website

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
        } else {
            document.body.style.overflow = '';
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

window.handleFormSubmit = function (event) {
    event.preventDefault();
    alert('Thank you! We will contact you soon to schedule your consultation.');
    window.closeModal();
    event.target.reset();
};

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
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Simple validation
    const requiredFields = ['name', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');

    if (missingFields.length > 0) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show success message
    alert('Thank you! Your consultation request has been submitted. We will contact you soon.');

    // Reset form
    event.target.reset();

    // Close modal
    closeModal();
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
        } else {
            document.body.style.overflow = '';
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

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

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

    // Form initialization
    const consultationForm = document.querySelector('.modal-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', handleFormSubmit);
    }

    // Contact form initialization
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

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
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! We will contact you soon to schedule your consultation.');
        closeModal();
        form.reset();
    });
});

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
let currentSlide = 0;
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