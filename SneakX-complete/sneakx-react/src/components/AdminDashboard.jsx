import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { allProducts } from '../data/ProductsData';

const AdminDashboard = () => {
    const { products, orders, addProduct } = useOutletContext();
    const [activeTab, setActiveTab] = useState('products');
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'Nike',
        imageUrl: '',
        description: '',
        rating: 4.5,
        reviews: 100,
        sizes: '6,7,8,9,10,11,12',
        inStock: true
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            price: parseFloat(formData.price),
            rating: parseFloat(formData.rating),
            reviews: parseInt(formData.reviews),
            sizes: formData.sizes.split(',').map(s => s.trim())
        };
        addProduct(newProduct);
        alert('Product added successfully!');
        setFormData({
            name: '',
            price: '',
            category: 'Nike',
            imageUrl: '',
            description: '',
            rating: 4.5,
            reviews: 100,
            sizes: '6,7,8,9,10,11,12',
            inStock: true
        });
    };

    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const totalOrders = orders.length;
    const totalProducts = products.length + allProducts.length;

    return (
        <div className="min-h-screen w-screen bg-black p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-5xl text-white font-mont font-extrabold mb-2">Admin Dashboard</h1>
                    <p className="text-white/60 font-mont">Manage products, inventory, and orders</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-6">
                        <p className="text-white/60 font-mont text-sm mb-2">Total Products</p>
                        <p className="text-4xl text-white font-mont font-extrabold">{totalProducts}</p>
                    </div>
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-6">
                        <p className="text-white/60 font-mont text-sm mb-2">Total Orders</p>
                        <p className="text-4xl text-white font-mont font-extrabold">{totalOrders}</p>
                    </div>
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-6">
                        <p className="text-white/60 font-mont text-sm mb-2">Total Revenue</p>
                        <p className="text-4xl text-red-800 font-mont font-extrabold">₹{totalRevenue.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-6">
                        <p className="text-white/60 font-mont text-sm mb-2">Avg Order Value</p>
                        <p className="text-4xl text-white font-mont font-extrabold">
                            ₹{totalOrders > 0 ? Math.round(totalRevenue / totalOrders).toLocaleString() : '0'}
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-10 border-b border-white/20">
                    {[
                        { id: 'products', label: 'Add Products' },
                        { id: 'inventory', label: 'Inventory' },
                        { id: 'orders', label: 'Orders Management' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-mont font-bold border-b-2 transition ${
                                activeTab === tab.id
                                    ? 'text-red-800 border-red-800'
                                    : 'text-white/60 border-transparent hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'products' && (
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-8">
                        <h2 className="text-3xl text-white font-mont font-extrabold mb-8">Add New Product</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-white font-mont font-bold block mb-2">Product Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                    placeholder="Nike Air Force 1"
                                />
                            </div>

                            <div>
                                <label className="text-white font-mont font-bold block mb-2">Price *</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    required
                                    step="0.01"
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                    placeholder="4999"
                                />
                            </div>

                            <div>
                                <label className="text-white font-mont font-bold block mb-2">Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-red-800 font-mont"
                                >
                                    <option>Nike</option>
                                    <option>Adidas</option>
                                    <option>Converse</option>
                                    <option>New Balance</option>
                                    <option>Puma</option>
                                    <option>Asics</option>
                                    <option>Onitsuka Tiger</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-white font-mont font-bold block mb-2">Rating</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleInputChange}
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                />
                            </div>

                            <div>
                                <label className="text-white font-mont font-bold block mb-2">Number of Reviews</label>
                                <input
                                    type="number"
                                    name="reviews"
                                    value={formData.reviews}
                                    onChange={handleInputChange}
                                    min="0"
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                />
                            </div>

                            <div className="flex items-end">
                                <label className="text-white font-mont font-bold flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="inStock"
                                        checked={formData.inStock}
                                        onChange={handleInputChange}
                                        className="w-5 h-5"
                                    />
                                    In Stock
                                </label>
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-white font-mont font-bold block mb-2">Image URL *</label>
                                <input
                                    type="url"
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-white font-mont font-bold block mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                    placeholder="Product description..."
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-white font-mont font-bold block mb-2">Available Sizes (comma-separated)</label>
                                <input
                                    type="text"
                                    name="sizes"
                                    value={formData.sizes}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                                    placeholder="6,7,8,9,10,11,12"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:col-span-2 bg-red-800 text-white font-mont font-bold py-4 rounded-lg hover:bg-red-900 transition text-lg"
                            >
                                Add Product
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'inventory' && (
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-8">
                        <h2 className="text-3xl text-white font-mont font-extrabold mb-8">Inventory Management</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-white font-mont">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="text-left py-4 px-4">Product</th>
                                        <th className="text-left py-4 px-4">Price</th>
                                        <th className="text-left py-4 px-4">Category</th>
                                        <th className="text-left py-4 px-4">Status</th>
                                        <th className="text-left py-4 px-4">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...products, ...allProducts].slice(0, 20).map((product, idx) => (
                                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                                            <td className="py-4 px-4 font-bold">{product.name}</td>
                                            <td className="py-4 px-4">₹{parseFloat(product.price).toLocaleString()}</td>
                                            <td className="py-4 px-4">{product.category}</td>
                                            <td className="py-4 px-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                                    product.inStock ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                                                }`}>
                                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-1">
                                                    ★ {product.rating}
                                                    <span className="text-white/60">({product.reviews})</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="bg-white/8 border-2 border-white/20 rounded-lg p-8">
                        <h2 className="text-3xl text-white font-mont font-extrabold mb-8">Orders Management</h2>
                        {orders.length === 0 ? (
                            <p className="text-white/60 font-mont">No orders yet</p>
                        ) : (
                            <div className="space-y-6">
                                {orders.slice().reverse().map((order, idx) => (
                                    <div key={idx} className="border border-white/20 rounded-lg p-6 hover:bg-white/5 transition">
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                            <div>
                                                <p className="text-white/60 text-sm font-mont">Order Date</p>
                                                <p className="text-white font-mont font-bold">{order.orderDate} {order.orderTime}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-sm font-mont">Customer</p>
                                                <p className="text-white font-mont font-bold">{order.deliveryAddress?.fullName || 'N/A'}</p>
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-sm font-mont">Items</p>
                                                <p className="text-white font-mont font-bold">{order.items?.length || 0} items</p>
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-sm font-mont">Total Amount</p>
                                                <p className="text-red-800 font-mont font-bold">₹{order.totalAmount?.toLocaleString() || '0'}</p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-white/60 font-mont">
                                            <p>Status: <span className="text-yellow-400">{order.orderStatus || 'Pending'}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
