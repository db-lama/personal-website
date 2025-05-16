// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Create and animate 3D candlesticks
function createCandlesticks() {
    const container = document.getElementById('candlestickContainer');
    const numberOfCandlesticks = 20;
    
    for (let i = 0; i < numberOfCandlesticks; i++) {
        const candlestick = document.createElement('div');
        candlestick.className = 'candlestick';
        
        // Random position in 3D space
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const z = Math.random() * 500 - 250;
        
        candlestick.style.left = `${x}%`;
        candlestick.style.top = `${y}%`;
        candlestick.style.transform = `translateZ(${z}px)`;
        
        // Create candlestick body
        const body = document.createElement('div');
        body.className = `candlestick-body ${Math.random() > 0.5 ? 'green' : 'red'}`;
        
        // Random height for body
        const height = 30 + Math.random() * 100;
        body.style.height = `${height}px`;
        
        // Create wicks
        const upperWick = document.createElement('div');
        upperWick.className = 'candlestick-wick';
        const lowerWick = document.createElement('div');
        lowerWick.className = 'candlestick-wick';
        
        // Random wick heights
        const upperWickHeight = 10 + Math.random() * 30;
        const lowerWickHeight = 10 + Math.random() * 30;
        
        upperWick.style.height = `${upperWickHeight}px`;
        upperWick.style.bottom = '100%';
        
        lowerWick.style.height = `${lowerWickHeight}px`;
        lowerWick.style.top = '100%';
        
        // Assemble candlestick
        body.appendChild(upperWick);
        body.appendChild(lowerWick);
        candlestick.appendChild(body);
        
        // Random animation delay
        body.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(candlestick);
    }
}

// Initialize candlesticks when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCandlesticks();
    
    // Initialize other animations
    const elements = document.querySelectorAll('.service-card, .project-card, .methodology-cards .card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    animateOnScroll();
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .project-card, .methodology-cards .card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.background = '#212529';
    }
}); 