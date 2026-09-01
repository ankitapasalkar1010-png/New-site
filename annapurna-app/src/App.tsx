import React, { useState } from 'react'

// Types
interface CartItem {
  id: string
  name: string
  kitchen: string
  price: number
  quantity: number
  image: string
  isVeg: boolean
}

interface Kitchen {
  id: string
  name: string
  rating: number
  reviewsCount: number
  distance: string
  prepTime: string
  specialty: string
  image: string
  badge?: string
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'discovery' | 'kitchen' | 'cart' | 'checkout' | 'seller'>('home')
  const [userRole, setUserRole] = useState<'buyer' | 'seller'>('buyer')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Sample Cart State
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'm1',
      name: 'Ghar Jaisa Rajma Chawal Thali',
      kitchen: "Anita's Kitchen",
      price: 180,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80',
      isVeg: true
    },
    {
      id: 'p1',
      name: 'Homemade Kacha Aam Ka Achar (500g)',
      kitchen: "Anita's Kitchen",
      price: 250,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
      isVeg: true
    }
  ])

  // Kitchens Data
  const kitchens: Kitchen[] = [
    {
      id: 'k1',
      name: "Anita's Home Kitchen",
      rating: 4.9,
      reviewsCount: 128,
      distance: '1.2 km',
      prepTime: '25-30 min',
      specialty: 'North Indian Thalis & Pickles',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80',
      badge: 'FSSAI Verified'
    },
    {
      id: 'k2',
      name: "Sunita's Gujarati Rasoi",
      rating: 4.8,
      reviewsCount: 94,
      distance: '2.5 km',
      prepTime: '20-25 min',
      specialty: 'Dhokla, Undhiyu & Gujrati Thali',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80',
      badge: 'Top Rated'
    },
    {
      id: 'k3',
      name: "Dadi Maa Ke Achar & Sweets",
      rating: 5.0,
      reviewsCount: 210,
      distance: '0.8 km',
      prepTime: '15-20 min',
      specialty: 'Traditional Mango & Lemon Pickles',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
      badge: 'Heritage Recipe'
    }
  ]

  const categories = ['All', 'Thalis', 'Pickles & Chutneys', 'Sweets', 'Snacks', 'Regional Specialties']

  // Cart Helper functions
  const addToCart = (item: { id: string; name: string; kitchen: string; price: number; image: string; isVeg: boolean }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    )
  }

  const totalCartCount = cart.reduce((acc, i) => acc + i.quantity, 0)
  const cartSubtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const deliveryFee = 35
  const grandTotal = cartSubtotal > 0 ? cartSubtotal + deliveryFee : 0

  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#1e1b16] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#fff8f0]/90 backdrop-blur-md border-b border-[#e8e2d8] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#9f3d00] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-2xl">restaurant</span>
            </div>
            <div>
              <h1 className="font-['DM_Sans'] font-bold text-xl text-[#9f3d00] tracking-tight leading-none">
                Annapurna
              </h1>
              <p className="text-xs text-[#1b6d24] font-semibold tracking-wide">Ghar Ka Swaad</p>
            </div>
          </div>

          {/* Location Delivery Selector (Desktop) */}
          <div className="hidden md:flex items-center gap-2 bg-[#f4ede3] px-3 py-1.5 rounded-full text-sm border border-[#e8e2d8]">
            <span className="material-symbols-outlined text-[#9f3d00] text-lg">location_on</span>
            <span className="font-semibold text-xs text-[#594238]">Deliver to:</span>
            <span className="font-medium text-xs truncate max-w-[150px]">Indiranagar, Sector 4</span>
            <span className="material-symbols-outlined text-sm text-[#705740]">keyboard_arrow_down</span>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Role Switcher Pill */}
            <div className="bg-[#f4ede3] p-1 rounded-full flex items-center border border-[#e0c0b3]">
              <button
                onClick={() => {
                  setUserRole('buyer')
                  setActiveTab('home')
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  userRole === 'buyer'
                    ? 'bg-[#9f3d00] text-white shadow-sm'
                    : 'text-[#594238] hover:text-[#9f3d00]'
                }`}
              >
                Buyer Mode
              </button>
              <button
                onClick={() => {
                  setUserRole('seller')
                  setActiveTab('seller')
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  userRole === 'seller'
                    ? 'bg-[#1b6d24] text-white shadow-sm'
                    : 'text-[#594238] hover:text-[#1b6d24]'
                }`}
              >
                Chef Dashboard
              </button>
            </div>

            {/* Cart Icon */}
            {userRole === 'buyer' && (
              <button
                onClick={() => setActiveTab('cart')}
                className="relative p-2 rounded-full hover:bg-[#f4ede3] transition-colors"
                title="View Cart"
              >
                <span className="material-symbols-outlined text-[#1e1b16] text-2xl">shopping_bag</span>
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#9f3d00] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#fff8f0]">
                    {totalCartCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 pb-24 md:pb-8">
        {userRole === 'seller' ? (
          /* SELLER / CHEF DASHBOARD VIEW */
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e2d8] shadow-soft flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=150&q=80"
                  alt="Anita's Kitchen"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1b6d24]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-['DM_Sans'] text-2xl font-bold text-[#1e1b16]">Anita's Home Kitchen</h2>
                    <span className="bg-[#a0f399] text-[#005312] text-xs font-bold px-2 py-0.5 rounded-full">Active & Open</span>
                  </div>
                  <p className="text-sm text-[#594238]">FSSAI Registration: #21523048000192 • Indiranagar</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-[#1b6d24] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#15541c] transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Add New Dish
                </button>
              </div>
            </div>

            {/* Capacity & Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#fff8f0] border border-[#e0c0b3] p-4 rounded-2xl">
                <p className="text-xs font-semibold text-[#705740] uppercase tracking-wider">Today's Capacity</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-bold text-[#9f3d00]">18 / 25</span>
                  <span className="text-xs font-bold text-[#1b6d24]">7 Slots Left</span>
                </div>
                <div className="w-full bg-[#e8e2d8] h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#9f3d00] h-full rounded-full w-[72%]"></div>
                </div>
              </div>

              <div className="bg-white border border-[#e8e2d8] p-4 rounded-2xl">
                <p className="text-xs font-semibold text-[#594238] uppercase tracking-wider">Today's Revenue</p>
                <p className="text-2xl font-bold text-[#1e1b16] mt-1">₹3,420</p>
                <p className="text-xs text-[#1b6d24] font-medium mt-1">↑ 14% vs yesterday</p>
              </div>

              <div className="bg-white border border-[#e8e2d8] p-4 rounded-2xl">
                <p className="text-xs font-semibold text-[#594238] uppercase tracking-wider">Active Orders</p>
                <p className="text-2xl font-bold text-[#1b6d24] mt-1">4 Orders</p>
                <p className="text-xs text-[#705740] mt-1">2 Preparing • 2 Ready</p>
              </div>

              <div className="bg-white border border-[#e8e2d8] p-4 rounded-2xl">
                <p className="text-xs font-semibold text-[#594238] uppercase tracking-wider">Customer Rating</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-2xl font-bold text-[#1e1b16]">4.9</span>
                  <span className="material-symbols-outlined text-amber-500 fill text-xl">star</span>
                  <span className="text-xs text-[#705740]">(128 reviews)</span>
                </div>
              </div>
            </div>

            {/* Active Orders List */}
            <div className="bg-white rounded-2xl border border-[#e8e2d8] p-6 shadow-soft">
              <h3 className="font-['DM_Sans'] font-bold text-xl mb-4 text-[#1e1b16]">Active Kitchen Orders</h3>
              <div className="space-y-4">
                {[
                  {
                    id: 'ORD-892',
                    customer: 'Rohan Sharma',
                    items: '2x Ghar Jaisa Rajma Chawal Thali',
                    total: '₹360',
                    time: '12 mins ago',
                    status: 'Preparing',
                    statusColor: 'bg-amber-100 text-amber-800'
                  },
                  {
                    id: 'ORD-891',
                    customer: 'Priya Nair',
                    items: '1x Kacha Aam Ka Achar (500g)',
                    total: '₹250',
                    time: '25 mins ago',
                    status: 'Ready for Pickup',
                    statusColor: 'bg-emerald-100 text-emerald-800'
                  }
                ].map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[#f4ede3] rounded-xl bg-[#faf3e9] gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#9f3d00]">{order.id}</span>
                        <span className="text-xs text-[#705740]">• {order.time}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="font-semibold text-[#1e1b16] mt-1">{order.customer}</p>
                      <p className="text-xs text-[#594238]">{order.items}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3">
                      <span className="font-bold text-lg text-[#1e1b16]">{order.total}</span>
                      <button className="bg-[#9f3d00] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#7c2e00] transition-colors">
                        Update Status
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === 'cart' ? (
          /* CART PAGE */
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-['DM_Sans'] text-2xl font-bold text-[#1e1b16]">Your Homemade Cart</h2>
              <button
                onClick={() => setActiveTab('home')}
                className="text-xs font-semibold text-[#9f3d00] hover:underline"
              >
                + Add more items
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#e8e2d8] space-y-4">
                <span className="material-symbols-outlined text-6xl text-[#8c7166]">shopping_bag</span>
                <h3 className="font-['DM_Sans'] text-xl font-bold">Your cart is currently empty</h3>
                <p className="text-sm text-[#594238]">Explore homemade thalis, authentic pickles, and traditional sweets nearby!</p>
                <button
                  onClick={() => setActiveTab('home')}
                  className="bg-[#9f3d00] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#7c2e00]"
                >
                  Explore Home Kitchens
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Items List */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-[#a0f399]/30 border border-[#1b6d24]/20 p-3 rounded-xl flex items-center gap-2 text-xs text-[#005312] font-semibold">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    <span>Single Kitchen Guarantee: Direct from Anita's Home Kitchen</span>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-4 border border-[#e8e2d8] flex items-center gap-4 shadow-sm"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-sm border border-emerald-600 flex items-center justify-center p-[1px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          </span>
                          <span className="text-xs text-[#705740] font-medium">{item.kitchen}</span>
                        </div>
                        <h4 className="font-semibold text-[#1e1b16] text-sm mt-0.5 leading-snug">{item.name}</h4>
                        <p className="font-bold text-[#9f3d00] text-base mt-1">₹{item.price}</p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center bg-[#f4ede3] rounded-full border border-[#e0c0b3] p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1e1b16] font-bold shadow-xs hover:bg-[#eee7dd]"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-[#9f3d00] text-white flex items-center justify-center font-bold shadow-xs hover:bg-[#7c2e00]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#e8e2d8] shadow-soft h-fit space-y-4">
                  <h3 className="font-['DM_Sans'] font-bold text-lg text-[#1e1b16]">Bill Summary</h3>
                  
                  <div className="space-y-2 text-xs text-[#594238]">
                    <div className="flex justify-between">
                      <span>Item Total</span>
                      <span className="font-semibold text-[#1e1b16]">₹{cartSubtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Home Delivery Fee</span>
                      <span className="font-semibold text-[#1e1b16]">₹{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between text-[#1b6d24] font-semibold">
                      <span>Advance Cook Deposit</span>
                      <span>Included</span>
                    </div>
                    <hr className="border-[#e8e2d8] my-2" />
                    <div className="flex justify-between text-base font-bold text-[#1e1b16]">
                      <span>To Pay</span>
                      <span className="text-[#9f3d00]">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('checkout')}
                    className="w-full bg-[#9f3d00] text-white py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#7c2e00] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : activeTab === 'checkout' ? (
          /* CHECKOUT VIEW */
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-['DM_Sans'] text-2xl font-bold text-[#1e1b16]">Select Delivery Address & Payment</h2>

            <div className="bg-white rounded-2xl p-5 border border-[#e8e2d8] space-y-4">
              <h3 className="font-bold text-sm text-[#1e1b16] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#9f3d00]">location_on</span>
                Delivery Address
              </h3>
              <div className="p-4 border-2 border-[#9f3d00] bg-[#fff8f0] rounded-xl flex items-start justify-between">
                <div>
                  <span className="bg-[#9f3d00] text-white text-[10px] font-bold px-2 py-0.5 rounded">HOME</span>
                  <p className="font-bold text-sm text-[#1e1b16] mt-2">Indiranagar Sector 4, House #204</p>
                  <p className="text-xs text-[#594238]">100ft Road, near Metro Pillar 42, Bengaluru - 560038</p>
                </div>
                <span className="material-symbols-outlined text-[#9f3d00]">check_circle</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#e8e2d8] space-y-4">
              <h3 className="font-bold text-sm text-[#1e1b16] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1b6d24]">payments</span>
                Select Payment Method
              </h3>
              
              <div className="space-y-2">
                {[
                  { name: 'UPI (GPay / PhonePe / Paytm)', icon: 'qr_code_scanner', selected: true },
                  { name: 'Credit / Debit Card', icon: 'credit_card', selected: false },
                  { name: 'Cash on Delivery', icon: 'local_atm', selected: false }
                ].map((pm, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 border rounded-xl flex items-center justify-between cursor-pointer ${
                      pm.selected ? 'border-[#1b6d24] bg-[#a0f399]/20 font-semibold' : 'border-[#e8e2d8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#1b6d24]">{pm.icon}</span>
                      <span className="text-xs text-[#1e1b16]">{pm.name}</span>
                    </div>
                    {pm.selected && <span className="material-symbols-outlined text-[#1b6d24]">check_circle</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#fff8f0] p-4 rounded-2xl border border-[#e0c0b3] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#705740]">Total Amount Payable</p>
                <p className="text-2xl font-bold text-[#9f3d00]">₹{grandTotal}</p>
              </div>
              <button
                onClick={() => {
                  alert('🎉 Order Placed Successfully! Anita\'s Home Kitchen has accepted your order.')
                  setCart([])
                  setActiveTab('home')
                }}
                className="bg-[#1b6d24] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#15541c]"
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          /* BUYER HOME & DISCOVERY FEED VIEW */
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#9f3d00] to-[#8b6f56] text-white p-6 md:p-10 shadow-lg">
              <div className="max-w-lg space-y-3 z-10 relative">
                <span className="bg-[#a0f399] text-[#005312] text-xs font-bold px-3 py-1 rounded-full inline-block">
                  100% Home Cooked & Hygienic
                </span>
                <h2 className="font-['DM_Sans'] text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Authentic Homemade Meals From Nearby Kitchens
                </h2>
                <p className="text-sm opacity-90 font-medium">
                  Prepared by passionate home chefs in small batches with traditional recipes.
                </p>
              </div>
            </div>

            {/* Search & Categories Bar */}
            <div className="space-y-4">
              <div className="relative max-w-xl">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#705740]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search for home thalis, kacha aam achar, laddu, dhokla..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#e8e2d8] pl-12 pr-4 py-3 rounded-full text-sm font-medium focus:outline-none focus:border-[#9f3d00] shadow-sm"
                />
              </div>

              {/* Categories Pills */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#9f3d00] text-white shadow-sm'
                        : 'bg-white text-[#594238] border border-[#e8e2d8] hover:bg-[#f4ede3]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Home Kitchens Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-['DM_Sans'] text-2xl font-bold text-[#1e1b16]">Top Verified Home Kitchens</h3>
                  <p className="text-xs text-[#705740]">Freshly made meals & traditional snacks in your neighborhood</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kitchens.map((k) => (
                  <div
                    key={k.id}
                    className="bg-white rounded-2xl border border-[#e8e2d8] overflow-hidden shadow-soft hover:shadow-md transition-shadow group flex flex-col"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={k.image}
                        alt={k.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {k.badge && (
                        <span className="absolute top-3 left-3 bg-[#1b6d24] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                          {k.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-xs">
                        <span className="material-symbols-outlined text-amber-500 fill text-sm">star</span>
                        <span>{k.rating}</span>
                        <span className="text-[#705740] font-normal">({k.reviewsCount})</span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-['DM_Sans'] font-bold text-lg text-[#1e1b16] group-hover:text-[#9f3d00] transition-colors">
                          {k.name}
                        </h4>
                        <p className="text-xs text-[#594238] font-medium mt-0.5">{k.specialty}</p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#705740] border-t border-[#f4ede3] pt-3">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {k.prepTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#9f3d00]">location_on</span>
                          {k.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Home-Cooked Dishes Grid */}
            <section className="space-y-4">
              <h3 className="font-['DM_Sans'] text-2xl font-bold text-[#1e1b16]">Popular Homemade Dishes</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    id: 'm1',
                    name: 'Ghar Jaisa Rajma Chawal Thali',
                    kitchen: "Anita's Home Kitchen",
                    price: 180,
                    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80',
                    desc: 'Slow-cooked Punjabi Rajma served with fragrant Basmati Rice, Roti, Salad & Sirka Pyaz.',
                    isVeg: true
                  },
                  {
                    id: 'p1',
                    name: 'Homemade Kacha Aam Ka Achar (500g)',
                    kitchen: "Anita's Home Kitchen",
                    price: 250,
                    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
                    desc: 'Traditional sun-dried mango pickle prepared with mustard oil and homemade spices.',
                    isVeg: true
                  },
                  {
                    id: 'm2',
                    name: 'Authentic Gujarati Thali Set',
                    kitchen: "Sunita's Gujarati Rasoi",
                    price: 220,
                    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80',
                    desc: 'Soft Phulka Rotis, Gujarati Kadhi, Sev Tamatar Subzi, Khaman Dhokla & Sweet.',
                    isVeg: true
                  }
                ].map((dish) => (
                  <div
                    key={dish.id}
                    className="bg-white rounded-2xl border border-[#e8e2d8] overflow-hidden shadow-soft flex flex-col justify-between"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                      <span className="absolute top-2 right-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        VEG
                      </span>
                    </div>

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-semibold text-[#1b6d24]">{dish.kitchen}</span>
                        <h4 className="font-bold text-base text-[#1e1b16] mt-0.5 leading-snug">{dish.name}</h4>
                        <p className="text-xs text-[#705740] line-clamp-2 mt-1">{dish.desc}</p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#f4ede3]">
                        <span className="font-bold text-lg text-[#9f3d00]">₹{dish.price}</span>
                        <button
                          onClick={() => addToCart(dish)}
                          className="bg-[#9f3d00] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#7c2e00] transition-colors flex items-center gap-1 shadow-xs"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Floating Bottom Nav for Mobile / Quick Access */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#e8e2d8] px-6 py-2 flex justify-around items-center z-50 shadow-nav">
        <button
          onClick={() => {
            setUserRole('buyer')
            setActiveTab('home')
          }}
          className={`flex flex-col items-center text-xs font-semibold ${
            userRole === 'buyer' && activeTab === 'home' ? 'text-[#9f3d00]' : 'text-[#705740]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">home</span>
          Home
        </button>

        <button
          onClick={() => {
            setUserRole('buyer')
            setActiveTab('cart')
          }}
          className={`flex flex-col items-center text-xs font-semibold relative ${
            userRole === 'buyer' && activeTab === 'cart' ? 'text-[#9f3d00]' : 'text-[#705740]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">shopping_bag</span>
          Cart
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-[#9f3d00] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            setUserRole('seller')
            setActiveTab('seller')
          }}
          className={`flex flex-col items-center text-xs font-semibold ${
            userRole === 'seller' ? 'text-[#1b6d24]' : 'text-[#705740]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">skillet</span>
          Chef View
        </button>
      </nav>
    </div>
  )
}
