// ===== MOBILE MENU TOGGLE =====
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

// ===== HERO SEARCH FUNCTIONALITY =====
document.querySelector('.hero-search button').addEventListener('click', function() {
    const searchInput = document.querySelector('.hero-search input');
    const query = searchInput.value.trim();
    
    if (query) {
        alert(`🔍 Searching for: "${query}"\n\nWe'll find the best service for you!`);
        searchInput.value = '';
    } else {
        alert('⚠️ Please enter a service you need!');
    }
});

// Search on Enter key
document.querySelector('.hero-search input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.hero-search button').click();
    }
});

// ===== SERVICE CARD CLICK =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        const price = this.querySelector('.price') ? this.querySelector('.price').textContent : 'Contact for price';
        alert(`📋 You selected: ${serviceName}\n💰 ${price}\n\nWould you like to proceed with booking this service?`);
    });
});

// ===== CTA BUTTON CLICK =====
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        alert('🚀 Welcome to Urbindo!\n\nSelect a service to get started. We have professionals waiting to help you!');
    }, 500);
});

// ===== LOGIN & SIGNUP BUTTONS =====
document.querySelector('.btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('🔐 Login Page Coming Soon!\n\nYou\'ll be able to login to your account to manage bookings.');
});

document.querySelector('.btn-signup').addEventListener('click', function(e) {
    e.preventDefault();
    alert('📝 Sign Up Coming Soon!\n\nCreate your account to start booking services today.');
});

// ===== SMOOTH SCROLL =====
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

// ===== REVIEW CARD CLICK =====
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('click', function() {
        const reviewer = this.querySelector('.reviewer .name').textContent;
        const location = this.querySelector('.reviewer .location').textContent;
        alert(`⭐ Review by ${reviewer} from ${location}\n\n"${this.querySelector('p').textContent}"\n\nThank you for trusting Urbindo!`);
    });
});

// ===== SCROLL ANIMATIONS =====
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

// ===== CONSOLE WELCOME =====
console.log('🏠 Urbindo | Trusted Home Services Platform');
console.log('📱 Website loaded successfully!');
console.log('✨ Ready to serve you with the best home services.');
console.log('💡 Tip: Click on any service card to start booking!');

// ===== WELCOME NOTIFICATION =====
window.addEventListener('load', function() {
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
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
        
        notification.addEventListener('click', () => {
            notification.remove();
        });
    }, 1000);
});

// ===== ANIMATION KEYFRAMES =====
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
