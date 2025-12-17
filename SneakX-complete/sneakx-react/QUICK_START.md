# 🚀 SneakX Quick Start Guide

## 5-Minute Setup

### Step 1: Navigate to Project
```bash
cd sneakx-react
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

✅ App opens at: **http://localhost:5173**

---

## 🎮 First Steps

### As a Customer
1. **Home Page**: See featured sneakers
2. **Click "Shop"**: Browse all 18+ products
3. **Search**: Find "Nike" products
4. **Filter**: Select "Nike" category
5. **View Details**: Click on a product
6. **Add to Cart**: Select size and quantity
7. **Checkout**: Enter delivery address
8. **Orders**: View your order history

### As an Admin
1. **Click "Login"**: Enter credentials
   - Default: user / password
2. **Click "Admin"**: Go to dashboard
3. **View Stats**: Total products, orders, revenue
4. **Add Product**: Fill form and submit
5. **Check Inventory**: View all products
6. **Manage Orders**: Track customer orders

---

## 🔍 Key Features

### 🛍️ Shopping
- **18 Products** from 7 brands
- **Search & Filter** by category
- **Sort** by price or rating
- **Wishlist** for later
- **Size Selection** for each shoe
- **Cart Management** with quantity controls

### 📦 Checkout
- **Address Form**: Delivery details
- **Order Confirmation**: Instant feedback
- **Order History**: Track all purchases

### 👨‍💼 Admin
- **Dashboard**: Sales metrics
- **Add Products**: New inventory
- **Inventory View**: Stock status
- **Order Management**: Track fulfillment

---

## 🗺️ Navigation Map

```
Home Page
├─ Header (Navigation)
│  ├─ Home
│  ├─ Shop (Search & Filter)
│  ├─ Wishlist (♡)
│  ├─ Login
│  ├─ Cart
│  ├─ Orders
│  └─ Admin
│
├─ Featured Brands Section
│
├─ Bestseller Products Grid
│  └─ Click Product Card
│     ├─ View Details (Modal)
│     └─ Add to Cart / Wishlist
│
└─ See All Products
   └─ Goes to /search (Shop page)
```

---

## 📱 All Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page |
| Shop | `/search` | Search & filter products |
| Wishlist | `/wishlist` | Saved items |
| Cart | `/cart` | Shopping cart |
| Checkout | Modal | Address form |
| Orders | `/orders` | Order history |
| Admin | `/admin` | Dashboard |
| Login | `/login` | Authentication |

---

## 💰 Products Overview

### Nike (₹4,999 - ₹5,999)
- Air Force 1
- Court Borough
- Blazer Mid

### Adidas (₹5,499 - ₹6,999)
- Superstar
- Stan Smith
- ZX 500

### Converse (₹3,999 - ₹4,499)
- Chuck Taylor All Star
- Chuck Taylor 70s

### New Balance (₹6,999 - ₹8,499)
- 574
- 990
- 574 Core

### Puma (₹4,499 - ₹5,999)
- Suede Classic
- RS-X
- Smash v2

### Asics (₹7,499 - ₹8,999)
- Gel-Lyte III
- Gel-Lyte V
- Gel-Kayano

### Onitsuka Tiger (₹5,999 - ₹7,499)
- Mexico 66
- Ultimate 81
- Corsair

---

## 🎯 Common Tasks

### Add Item to Cart
1. Click "Shop" or search
2. Click "View Details"
3. Select size
4. Increase quantity (if needed)
5. Click "Add to Cart"

### Save to Wishlist
1. Click "View Details" on product
2. Click "♡ Add to Wishlist"
3. View later at `/wishlist`

### Checkout Order
1. Go to Cart page
2. Review items
3. Click "Proceed to Checkout"
4. Fill address form
5. Click "Place Order"

### Manage Inventory (Admin)
1. Login and go to Admin
2. Click "Inventory" tab
3. View all products
4. Check stock status

---

## 🎨 UI Tips

- **Red Buttons**: Primary actions (Add to Cart, Submit)
- **White Buttons**: Secondary actions
- **Hover Effects**: Interactive feedback
- **Modal**: Click outside to close
- **Search**: Real-time results
- **Filter**: Click category to toggle

---

## 🔧 Troubleshooting

**Page not loading?**
- Check browser console for errors
- Refresh page (Ctrl+R or Cmd+R)
- Clear browser cache

**Products not showing?**
- Wait a moment for page to load
- Try refreshing
- Check internet connection

**Can't add to cart?**
- Verify size is selected
- Check quantity is > 0
- Ensure product is in stock

**Admin access blocked?**
- Make sure you're logged in
- Use correct credentials
- Check login page

---

## 📚 Learn More

- **Full Features**: See `FEATURES.md`
- **Enhancement Details**: See `ENHANCEMENT_SUMMARY.md`
- **Full Docs**: See `README.md`

---

## ⌨️ Keyboard Shortcuts

- `Ctrl+K` (or `Cmd+K`): Search (if implemented)
- `Esc`: Close modals
- `Enter`: Submit forms

---

## 💡 Pro Tips

✅ **Save Favorites**: Use wishlist for items you like  
✅ **Use Search**: Faster than scrolling  
✅ **Check Ratings**: Higher rated = better reviews  
✅ **Monitor Stock**: "In Stock" items available  
✅ **Review Address**: Prevent delivery issues  

---

## 🆘 Need Help?

1. Check browser console (F12) for errors
2. Read troubleshooting section above
3. Verify MongoDB is connected (backend)
4. Check internet connection
5. Try refreshing page

---

## 🎉 Ready to Go!

Your SneakX application is fully enhanced and ready to use!

**Happy Shopping! 🛍️**

---

**Version**: 2.0  
**Last Updated**: 2025  
**Status**: Ready ✅
