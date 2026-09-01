// Shared Cart Module for Annapurna
const AnnapurnaCart = {
    getKey: () => 'annapurna_cart',
    
    getItems: function() {
        try {
            const data = localStorage.getItem(this.getKey());
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading cart from localStorage', e);
            return [];
        }
    },
    
    saveItems: function(items) {
        localStorage.setItem(this.getKey(), JSON.stringify(items));
        this.updateBadges();
    },

    /**
     * Adds an item to the cart. If it already exists, increases the quantity.
     * @param {Object} item - { id, name, price, image, quantity, type }
     */
    addItem: function(item) {
        const items = this.getItems();
        // Use ID if available, otherwise fallback to name matching (for hardcoded elements)
        const existing = items.find(i => (i.id && i.id === item.id) || (!i.id && i.name === item.name));
        
        if (existing) {
            existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
        } else {
            if (!item.quantity) item.quantity = 1;
            items.push(item);
        }
        this.saveItems(items);
    },

    updateQuantity: function(idOrName, delta) {
        let items = this.getItems();
        const existingIndex = items.findIndex(i => (i.id && i.id === idOrName) || (!i.id && i.name === idOrName));
        
        if (existingIndex !== -1) {
            items[existingIndex].quantity = (items[existingIndex].quantity || 1) + delta;
            
            // Remove item if quantity goes to 0 or below
            if (items[existingIndex].quantity <= 0) {
                items.splice(existingIndex, 1);
            }
            this.saveItems(items);
        }
    },

    getTotal: function() {
        const items = this.getItems();
        return items.reduce((total, item) => {
            const priceStr = String(item.price).replace(/[^0-9.]/g, '');
            const price = parseFloat(priceStr) || 0;
            return total + (price * (item.quantity || 1));
        }, 0);
    },

    updateBadges: function() {
        const items = this.getItems();
        const count = items.reduce((acc, item) => acc + (item.quantity || 1), 0);
        
        // Find all possible badge elements across different page layouts
        const badges = [
            document.getElementById('desktopCartBadge'),
            document.getElementById('mobileCartBadge'),
            document.getElementById('headerCartBadge'),
            document.getElementById('navCartBadge'),
            ...document.querySelectorAll('.cart-badge') // Any element with cart-badge class
        ];

        badges.forEach(badge => {
            if (badge) {
                if (count > 0) {
                    badge.textContent = count > 99 ? '99+' : count;
                    badge.classList.remove('hidden');
                } else {
                    badge.textContent = '0';
                    badge.classList.add('hidden');
                }
            }
        });
    }
};

// Auto-initialize badges on page load
document.addEventListener('DOMContentLoaded', () => {
    AnnapurnaCart.updateBadges();
});
