// Product Data
const products = [
    // Sky Shots
    {
        id: 1,
        name: "Sky Rocket Supreme",
        category: "sky-shots",
        price: 450.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7pCIXf2QvJItWn3tIUwp3cpG0XEBTuxBHA&s",
        description: "High-flying aerial display with spectacular colors",
        rating: 4.8,
        stock: 25
    },
    {
        id: 2,
        name: "Multi-Colored Sky Burst",
        category: "sky-shots",
        price: 380.50,
        image: "🎆",
        description: "Multi-shot aerial firework with rainbow colors",
        rating: 4.7,
        stock: 30
    },
    {
        id: 3,
        name: "Thunder Strike",
        category: "sky-shots",
        price: 520.00,
        image: "https://images.pexels.com/photos/10967/pexels-photo-10967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Powerful aerial explosion with thunderous sound",
        rating: 4.9,
        stock: 15
    },
    {
        id: 4,
        name: "Golden Rain",
        category: "sky-shots",
        price: 290.99,
        image: "✨",
        description: "Beautiful golden sparks falling from the sky",
        rating: 4.6,
        stock: 40
    },

    // Ground Crackers
    {
        id: 5,
        name: "Ground Thunder",
        category: "ground-crackers",
        price: 202.99,
        image: "💥",
        description: "Loud ground-level explosive display",
        rating: 4.5,
        stock: 50
    },
    {
        id: 6,
        name: "Flash Bang Special",
        category: "ground-crackers",
        price: 180.75,
        image: "🔆",
        description: "Bright flash with loud bang effect",
        rating: 4.4,
        stock: 35
    },
    {
        id: 7,
        name: "Echo Blast",
        category: "ground-crackers",
        price: 250.50,
        image: "📢",
        description: "Echoing sound effects with visual display",
        rating: 4.7,
        stock: 28
    },
    {
        id: 8,
        name: "Ground Shaker",
        category: "ground-crackers",
        price: 350.00,
        image: "🌍",
        description: "Powerful ground-shaking explosion",
        rating: 4.8,
        stock: 20
    },

    // Sparklers
    {
        id: 9,
        name: "Golden Sparklers",
        category: "sparklers",
        price: 120.99,
        image: "https://sakthicrackers.com/wp-content/uploads/2023/09/50-cm-Electric-Sparklers.png",
        description: "Beautiful golden sparkles for hand-held fun",
        rating: 4.6,
        stock: 60
    },
    {
        id: 10,
        name: "Rainbow Sparklers",
        category: "sparklers",
        price: 150.50,
        image: "https://sakthicrackers.com/wp-content/uploads/2023/09/50-cm-Electric-Sparklers.png",
        description: "Multi-colored sparkles that change colors",
        rating: 4.8,
        stock: 45
    },
    {
        id: 11,
        name: "Long Lasting Sparklers",
        category: "sparklers",
        price: 190.99,
        image: "https://sakthicrackers.com/wp-content/uploads/2023/09/50-cm-Electric-Sparklers.png",
        description: "Extra long burning time sparklers",
        rating: 4.7,
        stock: 35
    },
    {
        id: 12,
        name: "Kids Safe Sparklers",
        category: "sparklers",
        price: 90.99,
        image: "https://sakthicrackers.com/wp-content/uploads/2023/09/50-cm-Electric-Sparklers.png",
        description: "Child-safe sparklers with reduced heat",
        rating: 4.9,
        stock: 80
    },

    // Fountains
    {
        id: 13,
        name: "Volcano Fountain",
        category: "fountains",
        price: 280.99,
        image: "https://sakthicrackers.com/wp-content/uploads/2023/09/50-cm-Electric-Sparklers.png",
        description: "Ground fountain with volcanic eruption effect",
        rating: 4.7,
        stock: 25
    },
    {
        id: 14,
        name: "Crystal Fountain",
        category: "fountains",
        price: 240.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rYojF9NS03mdxNzZA1eRFrk062S4DEG4uwAiZcI3FxoaLT31YjHaOmXzoiqxkGzMvL8&usqp=CAU",
        description: "Beautiful crystal-like sparkles fountain",
        rating: 4.6,
        stock: 30
    },
    {
        id: 15,
        name: "Multi-Tier Fountain",
        category: "fountains",
        price: 420.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rYojF9NS03mdxNzZA1eRFrk062S4DEG4uwAiZcI3FxoaLT31YjHaOmXzoiqxkGzMvL8&usqp=CAU",
        description: "Multi-level fountain with cascading effects",
        rating: 4.8,
        stock: 18
    },
    {
        id: 16,
        name: "Color Changing Fountain",
        category: "fountains",
        price: 310.75,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rYojF9NS03mdxNzZA1eRFrk062S4DEG4uwAiZcI3FxoaLT31YjHaOmXzoiqxkGzMvL8&usqp=CAU",
        description: "Fountain that changes colors during display",
        rating: 4.7,
        stock: 22
    },

    // Roman Candles
    {
        id: 17,
        name: "Classic Roman Candle",
        category: "roman-candles",
        price: 160.99,
        image: "🕯️",
        description: "Traditional multi-shot roman candle",
        rating: 4.5,
        stock: 40
    },
    {
        id: 18,
        name: "Super Roman Candle",
        category: "roman-candles",
        price: 260.50,
        image: "🔥",
        description: "Extra powerful roman candle with more shots",
        rating: 4.8,
        stock: 25
    },
    {
        id: 19,
        name: "Color Wheel Candle",
        category: "roman-candles",
        price: 210.99,
        image: "🎡",
        description: "Roman candle with spinning color wheel effect",
        rating: 4.7,
        stock: 32
    },
    {
        id: 20,
        name: "Whistling Roman Candle",
        category: "roman-candles",
        price: 230.75,
        image: "🎵",
        description: "Roman candle with whistling sound effects",
        rating: 4.6,
        stock: 28
    },

    // Combo Packs
    {
        id: 21,
        name: "Ultimate Celebration Pack",
        category: "combo-packs",
        price: 890.99,
        image: "🎉",
        description: "Complete fireworks package for big celebrations",
        rating: 4.9,
        stock: 15
    },
    {
        id: 22,
        name: "Family Fun Pack",
        category: "combo-packs",
        price: 450.50,
        image: "👨‍👩‍👧‍👦",
        description: "Safe and fun fireworks for the whole family",
        rating: 4.8,
        stock: 25
    },
    {
        id: 23,
        name: "New Year Special",
        category: "combo-packs",
        price: 750.00,
        image: "🎊",
        description: "Special pack for New Year celebrations",
        rating: 4.7,
        stock: 20
    },
    {
        id: 24,
        name: "Wedding Celebration Pack",
        category: "combo-packs",
        price: 1250.99,
        image: "💒",
        description: "Elegant fireworks for wedding celebrations",
        rating: 4.9,
        stock: 10
    }
];

// Shopping Cart
let cart = [];
let cartTotal = 0;
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartIcon = document.getElementById('cart-icon');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const filterTabs = document.querySelectorAll('.filter-tab');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadWishlist();
    displayProducts(products);
    setupEventListeners();
    updateCartUI();
    updateActiveNav();
});

// Event Listeners
function setupEventListeners() {
    // Cart functionality
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterProducts(filter);
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            const correspondingTab = document.querySelector(`[data-filter="${category}"]`);
            if (correspondingTab) {
                correspondingTab.classList.add('active');
            }
        });
    });

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
                // Update active nav after scroll
                setTimeout(updateActiveNav, 100);
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
}

// Display Products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.image.startsWith('http') ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">` : product.image}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-rating">
                ${generateStars(product.rating)} <span class="rating-number">(${product.rating})</span>
            </div>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <div class="product-stock ${product.stock < 10 ? 'low-stock' : ''}">
                <i class="fas fa-box"></i> Stock: ${product.stock}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                <i class="fas fa-cart-plus"></i> 
                ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <div class="product-actions">
                <button class="wishlist-btn" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
                    <i class="far fa-heart"></i>
                </button>
                <button class="share-btn" onclick="shareProduct(${product.id})" title="Share Product">
                    <i class="fas fa-share"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Generate Star Rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Filter Products
function filterProducts(filter) {
    let filteredProducts;
    
    if (filter === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    displayProducts(filteredProducts);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
        } else {
            showNotification('Sorry, we don\'t have enough stock!', 'error');
            return;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Add success animation to the button
    const button = event.target.closest('.add-to-cart');
    button.classList.add('success-animation');
    setTimeout(() => button.classList.remove('success-animation'), 600);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Item removed from cart!', 'info');
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (newQuantity > product.stock) {
        showNotification('Sorry, we don\'t have enough stock!', 'error');
        return;
    }
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        updateCartUI();
    }
}

// Update Cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);
    
    // Update cart items display
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                ${item.image}
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price.toFixed(2)} each</p>
                <div class="quantity-controls">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-price">
                ₹${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Toggle Cart
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Handle Checkout
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Simulate checkout process
    showNotification('Redirecting to checkout...', 'info');
    
    setTimeout(() => {
        alert(`Thank you for your order!\n\nTotal: ₹${cartTotal.toFixed(2)}\nItems: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n\nYour order will be processed shortly.`);
        
        // Clear cart
        cart = [];
        updateCartUI();
        toggleCart();
    }, 1500);
}

// Handle Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simulate form submission
    showNotification('Sending message...', 'info');
    
    setTimeout(() => {
        showNotification('Message sent successfully!', 'success');
        e.target.reset();
    }, 1500);
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 3000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Get notification icon
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Get notification color
function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Scroll to Categories
function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
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

// Add to Wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`${product.name} removed from wishlist!`, 'info');
        
        // Update button icon
        const button = event.target.closest('.wishlist-btn');
        button.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification(`${product.name} added to wishlist!`, 'success');
        
        // Update button icon
        const button = event.target.closest('.wishlist-btn');
        button.innerHTML = '<i class="fas fa-heart"></i>';
        button.style.color = '#ff6b35';
    }
    
    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Share Product
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const shareData = {
        title: `${product.name} - FireCrackers Hub`,
        text: `Check out this amazing firework: ${product.name} - ${product.description}`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showNotification('Product shared successfully!', 'success'))
            .catch(() => fallbackShare(product));
    } else {
        fallbackShare(product);
    }
}

// Fallback Share Function
function fallbackShare(product) {
    const shareText = `Check out this amazing firework: ${product.name} - ${product.description}`;
    const shareUrl = window.location.href;
    
    // Copy to clipboard
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
        .then(() => showNotification('Product link copied to clipboard!', 'success'))
        .catch(() => {
            // Show modal with share options
            showShareModal(product);
        });
}

// Show Share Modal
function showShareModal(product) {
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Share ${product.name}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Share this amazing firework with your friends!</p>
                <div class="share-buttons">
                    <button onclick="shareToSocial('facebook', ${product.id})">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button onclick="shareToSocial('twitter', ${product.id})">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button onclick="shareToSocial('whatsapp', ${product.id})">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Share to Social Media
function shareToSocial(platform, productId) {
    const product = products.find(p => p.id === productId);
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`${product.name} - ${product.description}`);
    
    let url = '';
    
    switch(platform) {
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${shareText}%20${shareUrl}`;
            break;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    
    // Remove modal
    document.querySelector('.share-modal')?.remove();
}

// Load Wishlist from localStorage
function loadWishlist() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to category cards
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add loading animation to buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const originalText = e.target.innerHTML;
            e.target.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
            e.target.disabled = true;
            
            setTimeout(() => {
                e.target.innerHTML = originalText;
                e.target.disabled = false;
            }, 1000);
        }
    });
});

// Add quantity controls styling
const style = document.createElement('style');
style.textContent = `
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
    
    .quantity-controls button {
        background: #ff6b35;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    
    .quantity-controls button:hover {
        background: #e55a2b;
        transform: scale(1.1);
    }
    
    .quantity-controls span {
        color: white;
        font-weight: 600;
        min-width: 20px;
        text-align: center;
    }
    
    .empty-cart {
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        padding: 2rem;
        font-size: 1.1rem;
    }
    
    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        padding: 3rem;
        font-size: 1.2rem;
    }
    
    .product-rating {
        margin: 0.5rem 0;
        color: #ffd700;
    }
    
    .product-stock {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
document.head.appendChild(style);
