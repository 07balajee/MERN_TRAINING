# 🔥 SneakX - Premium Sneaker E-Commerce Platform

SneakX is a full-stack MERN e-commerce application for sneaker shopping with advanced features including search, filtering, wishlist, and admin management.

## 🌟 Key Features

✨ **18+ Products** | 🔍 **Search & Filter** | 💚 **Wishlist** | 🛒 **Smart Cart** | 📦 **Secure Checkout** | 📊 **Admin Dashboard** | 💾 **MongoDB**

## 📦 What's New in v2.0

- ⭐ Advanced search and category filtering
- ⭐ Product details modal with size selection
- ⭐ Wishlist feature with localStorage
- ⭐ Enhanced admin dashboard with analytics
- ⭐ 18 products across 7 brands
- ⭐ Real-time inventory management

## 🚀 Quick Start

```bash
cd sneakx-react
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:3000

## 🎮 Features

### Customer
- Browse 18+ sneakers
- Search by name/description
- Filter by category (Nike, Adidas, etc.)
- Sort by price/rating
- View detailed product info
- Save to wishlist
- Add to cart with size/quantity
- Checkout with delivery address
- Track orders

### Admin
- Dashboard with statistics
- Add new products
- Monitor inventory
- Manage customer orders
- Track revenue metrics

## 🗂️ Project Structure

```
src/components/
├── SearchFilter.jsx       (Search & filter)
├── ProductDetails.jsx     (Product modal)
├── Wishlist.jsx          (Saved items)
├── AdminDashboard.jsx    (Admin panel)
├── Cart.jsx              (Shopping cart)
├── Orders.jsx            (Order history)
└── ... (other components)

src/data/
└── ProductsData.js       (18 products)
```

## 📖 Full Documentation

**See [FEATURES.md](./FEATURES.md) for complete documentation including:**
- Detailed feature explanations
- Database schema
- API endpoints
- Usage examples
- Troubleshooting guide

## 🔧 Tech Stack

**Frontend**: React 19 | Vite 7 | Tailwind CSS | React Router  
**Backend**: Express.js | MongoDB Atlas | Mongoose | Node.js

## 📱 Product Categories

Nike • Adidas • Converse • New Balance • Puma • Asics • Onitsuka Tiger

## 🎨 UI Features

- Black theme with red accents
- Responsive grid layout (1-4 columns)
- Modals for detailed views
- Real-time search results
- Color-coded status indicators

## 🚀 Deployment

```bash
npm run build
# Deploy dist/ folder to Vercel/Netlify
```

## 💡 Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Product reviews
- [ ] Email notifications
- [ ] Real-time inventory
- [ ] Mobile app

## 🐛 Support

**Products not showing?** Check ProductsData.js  
**Checkout fails?** Verify MongoDB connection  
**Admin blocked?** Login with credentials

---

**Version**: 2.0 Enhanced | **Status**: Production Ready ✅ | **Last Updated**: 2025
