# SneakX - Enhanced Features Documentation

## Overview
SneakX is a full-stack MERN e-commerce application for sneaker shopping with advanced features including search, filtering, wishlist, and admin management.

---

## ✨ Core Features

### 1. **Product Catalog**
- **18+ Pre-loaded Products**: Nike Air Force 1, Adidas Superstar, Converse Chuck Taylor, and more
- **Organized by Categories**: Nike, Adidas, Converse, New Balance, Puma, Asics, Onitsuka Tiger
- **Rich Product Data**:
  - Product name, price (₹), and detailed description
  - Star ratings (4.5-4.9 ★) with review counts (100-687)
  - Available sizes (6-13, varies by brand)
  - Stock status indicator
  - High-quality product images

### 2. **Search & Filter System**
- **Advanced Search**: Search by product name or description
- **Category Filtering**: Filter products by brand (Nike, Adidas, etc.)
- **Smart Sorting**:
  - Newest products
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
- **Real-time Results**: Shows count of matching products

**Access**: Click "Shop" button in header or navigate to `/search`

### 3. **Product Details Modal**
- **Full Product Information**: 
  - Large product image display
  - Complete description
  - Rating with review count and star display
  - Category badge
  - In-stock status
- **Size Selection**: Interactive grid of available sizes (6-13)
- **Quantity Control**: +/- buttons to adjust quantity before adding to cart
- **Smart Add to Cart**: Adds multiple items at once based on quantity
- **Wishlist Integration**: Save products for later

**Triggered**: Click "View Details" on any product card

### 4. **Shopping Cart**
- **Cart Management**:
  - Add products with size and quantity
  - Remove items from cart
  - Update quantities (+/- buttons)
  - Clear all items
- **Order Summary**:
  - Subtotal calculation
  - Displays all cart items with images
  - Shows quantity and individual prices
  - Proceed to Checkout button
- **Persistent Storage**: Cart data stored in context

**Access**: Click "Cart" in header or navigate to `/cart`

### 5. **Checkout System**
- **Address Collection Form** (Modal):
  - Full Name (required)
  - Email (optional)
  - Phone (required)
  - Delivery Address (required)
  - City (required)
  - State (optional)
  - Zip Code (required)
- **Order Summary**: Shows all items and total amount
- **Form Validation**: Ensures required fields are filled
- **API Integration**: Saves order to MongoDB backend

**Triggered**: Click "Proceed to Checkout" on Cart page

### 6. **Orders Management**
- **Order History Display**:
  - Complete order details (ID, date, time)
  - Delivery address information
  - Items in order with quantities and prices
  - Total order amount
  - Order status (Pending/Processing/Shipped/Delivered)
- **MongoDB Persistence**: All orders saved to database with timestamps
- **Order Status**: Shows current fulfillment status

**Access**: Click "Orders" in header or navigate to `/orders`

### 7. **Wishlist Feature**
- **Save Favorites**: Add products to wishlist without buying
- **Wishlist Display**:
  - Grid view of all saved products
  - Product images, names, prices, ratings
  - Remove button (✕) to delete items
  - Quick "Add to Cart" button
  - "View Details" to see full product info
- **Local Storage**: Wishlist persists across sessions
- **Empty State**: Helpful message when wishlist is empty

**Access**: Click "♡" heart icon in header or navigate to `/wishlist`

### 8. **Admin Dashboard**
- **Statistics Overview**:
  - Total products count
  - Total orders count
  - Total revenue (₹)
  - Average order value
- **Three Management Tabs**:

  **a) Add Products Tab**
  - Form to add new products
  - Fields: Name, Price, Category, Rating, Reviews, Stock Status, Description, Sizes, Image URL
  - Category selector (Nike, Adidas, Converse, etc.)
  - Size picker (comma-separated format: "6,7,8,9,10,11,12")
  - Form validation and success feedback

  **b) Inventory Tab**
  - View all 20+ products in table format
  - Columns: Product Name, Price, Category, Stock Status, Rating
  - Color-coded stock status (Green = In Stock, Red = Out of Stock)
  - Display ratings with review counts
  - Sortable product list

  **c) Orders Management Tab**
  - View all customer orders
  - Order details: Date/Time, Customer Name, Item Count, Total Amount
  - Order status display (Pending, Processing, Shipped, Delivered)
  - Reverse chronological order (newest first)
  - Hover effects for better UX

**Access**: Click "Admin" in header (admin only) or navigate to `/admin`
**Protection**: Protected route - requires admin login

---

## 🛠️ Technical Architecture

### Frontend Stack
- **Framework**: React 19.2.0 with Vite 7.2.7
- **Routing**: React Router v7.10.1
- **Styling**: Tailwind CSS 4.1.17 with @tailwindcss/vite
- **State Management**: React Context API (HomeLayout as central hub)
- **Storage**: localStorage for wishlist persistence

### Backend Stack
- **Server**: Express.js on Node.js
- **Database**: MongoDB Atlas (Cloud)
- **ODM**: Mongoose
- **API Design**: RESTful endpoints

### Database Schema

**Order Model**:
```javascript
{
  items: [
    { id, name, price, imageUrl, quantity, selectedSize }
  ],
  totalAmount: Number,
  deliveryAddress: {
    fullName, email, phone, address, city, state, zipCode
  },
  orderDate: String,
  orderTime: String,
  orderStatus: String (Pending/Processing/Shipped/Delivered/Cancelled),
  createdAt: Timestamp
}
```

**Product Data Structure** (ProductsData.js):
```javascript
{
  id, name, price, category, imageUrl, description,
  rating, reviews, sizes: [], inStock: Boolean
}
```

### API Endpoints
- `POST /orders/create` - Create new order
- `GET /orders/all` - Get all orders
- `GET /orders/:id` - Get specific order
- `PUT /orders/:id/status` - Update order status
- `DELETE /orders/:id` - Delete order

---

## 📱 User Journeys

### Customer Journey
1. **Browse**: Home page → Click "Shop" → Search/Filter products
2. **Explore**: View product details → Check sizes, ratings, descriptions
3. **Save**: Add to Wishlist for later
4. **Shop**: Add items to cart with size and quantity
5. **Checkout**: Proceed to checkout → Enter delivery address
6. **Confirm**: Order saved to database → View in Orders page
7. **Track**: Check order status in Orders page

### Admin Journey
1. **Login**: Enter credentials → Redirected to Admin Dashboard
2. **Add Products**: Fill form with product details → Submit
3. **Monitor**: Check inventory status and stock levels
4. **Manage**: View all orders, track fulfillment status, update order status

---

## 🎯 Key Components

### Frontend Components
- **Header.jsx**: Navigation bar with links to all pages
- **Home.jsx**: Landing page with hero section and bestsellers
- **SearchFilter.jsx**: Search, filter, and sort products
- **ProductDetails.jsx**: Modal for detailed product view
- **Cart.jsx**: Shopping cart with quantity management
- **Checkout.jsx**: Address form modal
- **Orders.jsx**: Order history display
- **Wishlist.jsx**: Saved products management
- **AdminDashboard.jsx**: Admin management panel
- **CardList.jsx**: Product card component (generic)

### Data Files
- **ProductsData.js**: 18 products with metadata, organized by category

### Layout Components
- **HomeLayout.jsx**: Central state management hub

---

## 🔐 Security & Protection
- **Protected Routes**: Admin page requires login
- **Authentication**: Simple session-based via sessionStorage
- **IP Whitelisting**: MongoDB Atlas security
- **Environment Variables**: Sensitive data stored in .env

---

## 📊 Product Categories
1. **Nike** - Air Force 1, Court Borough, Blazer Mid
2. **Adidas** - Superstar, Stan Smith, ZX 500
3. **Converse** - Chuck Taylor All Star, Chuck Taylor 70s
4. **New Balance** - 574, 990, 574 Core
5. **Puma** - Suede Classic, RS-X, Smash v2
6. **Asics** - Gel-Lyte III, Gel-Lyte V, Gel-Kayano
7. **Onitsuka Tiger** - Mexico 66, Ultimate 81

---

## 💡 Usage Examples

### Adding a Product (Admin)
1. Go to Admin Dashboard → "Add Products" tab
2. Fill in: Name, Price, Category, Description, Image URL
3. Set Rating (4.5-5) and Review count
4. Enter available sizes: "6,7,8,9,10,11,12"
5. Click "Add Product" → Success!

### Finding a Sneaker (Customer)
1. Click "Shop" in header
2. Search: "Nike" or "Air Force"
3. Filter by category: Select "Nike"
4. Sort: "Price: Low to High"
5. Click "View Details" on product
6. Select size, set quantity, add to cart

### Placing an Order
1. Add items to cart from different products
2. Click "Cart" to review items
3. Click "Proceed to Checkout"
4. Enter delivery address (Required: Name, Phone, Address, City, Zip)
5. Submit → Order saved to MongoDB
6. Redirected to Orders page → See new order

---

## 🚀 Future Enhancement Ideas
- [ ] User accounts with login
- [ ] Payment gateway integration (Razorpay, Stripe)
- [ ] Product reviews and ratings by users
- [ ] Size guide modal
- [ ] Product recommendations
- [ ] Email notifications for order updates
- [ ] Discount codes and coupons
- [ ] Real-time inventory tracking
- [ ] Order tracking with notifications
- [ ] Product comparison feature
- [ ] Image gallery with zoom
- [ ] Mobile app version

---

## 📝 Installation & Setup

### Prerequisites
- Node.js 16+
- MongoDB Atlas account
- npm or yarn

### Frontend Setup
```bash
cd sneakx-react
npm install
npm run dev
# Opens at http://localhost:5173
```

### Backend Setup
```bash
npm install express mongoose dotenv cors
npm start
# Runs on http://localhost:3000
```

### Environment Variables (.env)
```
PORT=3000
SECRET_KEY=sneakx-secret-key-2025
TOKEN_EXPIRY=24h
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
```

---

## ✅ Testing Checklist

- [ ] Search functionality works
- [ ] Filters by category work
- [ ] Sorting displays correct order
- [ ] Product details modal opens
- [ ] Size selection works
- [ ] Quantity controls work
- [ ] Add to cart updates cart
- [ ] Wishlist saves products
- [ ] Checkout saves to MongoDB
- [ ] Orders page displays orders
- [ ] Admin can add products
- [ ] Inventory shows all products
- [ ] Admin orders list displays correctly

---

**Version**: 2.0 Enhanced  
**Last Updated**: 2025  
**Status**: Production Ready ✓
