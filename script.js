// Product data with detailed descriptions
const products = {
    guthon: {
        title: "Guthon Cap",
        image: "image/Guthon Cap.png",
        description: "The design of this cap is inspired by the one worn by 8-year-old His Holiness the Dalai Lama when he first arrived in Lhasa—a symbol of innocence, destiny, and the beginning of a sacred journey. It pays tribute to a moment in history when a child stepped into a legacy that would inspire the world."
    },
    hhdl: {
        title: "HHDL Signature Cap",
        image: "image/HHDL Signature Cap.png",
        description: "The signature of His Holiness signifies his enduring blessings and the spirit of compassion he embodies. The cap bears his signature as a symbol of authenticity and blessing, connecting the wearer to His Holiness's lifelong commitment to peace, compassion, and the Tibetan spirit."
    },
    thankyou: {
        title: "Thank You His Holiness Cap",
        image: "image/Thank you His Holiness Cap.png",
        description: "The cap features the words 'Thank You His Holiness' as a humble tribute to his lifelong dedication to peace, compassion, and the well-being of humanity. It serves as a gesture of collective gratitude for the light he continues to bring into the world."
    },
    freetib: {
        title: "Free Tibet Cap",
        image: "image/Free Tibet Cap.png",
        description: "The cap also bears the words 'Free Tibet', representing the enduring struggle of the Tibetan people and their unwavering resilience. It stands as a powerful symbol of resistance against the Chinese Communist Party and a call for justice, freedom, and dignity."
    },
    bod: {
        title: "བོད Cap",
        image: "image/བོད་ Cap.png",
        description: "བོད means Tibet in Tibetan. This cap reinforces that Tibet is an independent nation with its own unique language, rooted in a rich and distinct culture. The Chinese government attempts to erase this identity by renaming it as Xizang. This cap stands as a powerful statement—that Tibet lives, speaks its own name, and refuses to be erased."
    }
};

// DOM elements
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.getElementsByClassName('close')[0];
const productCards = document.querySelectorAll('.product-card');

// Add click event listeners to all product cards
productCards.forEach(card => {
    card.addEventListener('click', function() {
        const productId = this.getAttribute('data-product');
        showProductDetails(productId);
    });
});

// Show product details in modal
function showProductDetails(productId) {
    const product = products[productId];
    if (product) {
        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Smooth scrolling for internal links
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

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add error handling for missing images
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});