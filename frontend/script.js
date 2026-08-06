// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('active');
    });
});

// Hero Search Functionality
document.querySelector('.hero-search button').addEventListener('click', function() {
    const searchInput = document.querySelector('.hero-search input');
    const query = searchInput.value.trim();
    
    if (query) {
        alert(`Searching for: "${query}"\nWe'll find the best service for you!`);
        searchInput.value = '';
    } else {
        alert('Please enter a service you need!');
    }
});

// Search on Enter key
document.querySelector('.hero-search input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.hero-search button').click();
    }
});

// Service Card Click - Show Booking Alert
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        const price = this.querySelector('.price') ? this.querySelector('.price').textContent : 'Contact for price';
        alert(`You selected: ${serviceName}\n${price}\n\nProceed to book this service?`);
    });
});

// CTA Button Click
document.querySelector('.cta-btn').addEventListener('click', function() {
    // Scroll to services section
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    
    // Show a welcome message after a short delay
    setTimeout(() => {
        alert('🚀 Welcome to Urbindo!\n\nSelect a service to get started. We have professionals waiting to help you!');
    }, 500);
});

// Login and Signup Button Alerts
document.querySelector('.btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('🔐 Login Page Coming Soon!\n\nYou\'ll be able to login to your account to manage bookings.');
});

document.querySelector('.btn-signup').addEventListener('click', function(e) {
    e.preventDefault();
    alert('📝 Sign Up Coming Soon!\n\nCreate your account to start booking services today.');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Review Interaction - Click to show more details
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('click', function() {
        const reviewer = this.querySelector('.reviewer .name').textContent;
        const location = this.querySelector('.reviewer .location').textContent;
        alert(`Review by ${reviewer} from ${location}\n\n⭐ Rating: ${this.querySelector('.review-stars').textContent.trim()}\n\nThank you for trusting Urbindo!`);
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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
document.querySelectorAll('.card, .step, .why-item, .review-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Simulate booking process - Additional interactive feature
console.log('🏠 Urbindo | Trusted Home Services Platform');
console.log('📱 Website loaded successfully!');
console.log('✨ Ready to serve you with the best home services.');

// Add a small floating notification
window.addEventListener('load', function() {
    console.log('💡 Tip: Click on any service card to start booking!');
    
    // Show a subtle welcome notification
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #1a2a3a;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            z-index: 9999;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 300px;
            cursor: pointer;
            animation: slideIn 0.5s ease;
        `;
        notification.innerHTML = `
            🎉 Welcome to Urbindo!<br>
            <small style="color: #b0bec5;">Click any service to book</small>
        `;
        document.body.appendChild(notification);
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
        
        // Click to close
        notification.addEventListener('click', () => {
            notification.remove();
        });
    }, 1000);
});

// Add animation keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
