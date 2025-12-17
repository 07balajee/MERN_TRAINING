import { useState } from 'react';
import { allProducts, categories } from '../data/ProductsData';
import CardList from './CardList';
import ProductDetails from './ProductDetails';

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Filter products
    let filteredProducts = allProducts.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchSearch && matchCategory;
    });

    // Sort products
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
        filteredProducts.sort((a, b) => b.id - a.id);
    }

    return (
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-5xl text-white font-mont font-extrabold mb-10">Explore All Sneakers</h1>

            {/* Search Bar */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search sneakers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:border-red-800 font-mont"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white/8 rounded-lg p-6 space-y-6 sticky top-10">
                        {/* Categories */}
                        <div>
                            <h3 className="text-white font-mont font-bold text-lg mb-4">Category</h3>
                            <div className="space-y-2">
                                {['All', ...categories].map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`block w-full text-left px-4 py-2 rounded-lg font-mont font-semibold transition ${
                                            selectedCategory === category
                                                ? 'bg-red-800 text-white'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <div>
                            <h3 className="text-white font-mont font-bold text-lg mb-4">Sort By</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-white/10 border-2 border-white/20 rounded-lg p-2 text-white font-mont focus:outline-none focus:border-red-800"
                            >
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>

                        {/* Results Count */}
                        <div className="border-t border-white/20 pt-4">
                            <p className="text-white/60 font-mont text-sm">
                                Showing {filteredProducts.length} results
                            </p>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-white/60 font-mont text-xl">No products found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    onClick={() => setSelectedProduct(product)}
                                    className="bg-white/80 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition transform hover:scale-105"
                                >
                                    <div className="w-full h-40 bg-gray-500 rounded-lg mb-4 overflow-hidden">
                                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-black font-mont font-bold text-lg mb-2">{product.name}</h3>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-yellow-400 text-sm">★ {product.rating}</span>
                                        <span className="text-black/60 text-xs">({product.reviews})</span>
                                    </div>
                                    
                                    <p className="text-black font-mont font-bold text-lg mb-4">₹{parseFloat(product.price).toLocaleString()}</p>
                                    <button className="w-full bg-red-800 text-white font-mont font-bold py-2 rounded-lg hover:bg-red-900 transition">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <ProductDetails
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default SearchFilter;
