import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import ProductDetails from './ProductDetails';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useOutletContext();

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
    }, []);

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-5xl text-white font-mont font-extrabold mb-10">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-white/60 font-mont text-xl mb-4">Your wishlist is empty</p>
                    <a href="/search" className="text-red-800 font-mont font-bold hover:text-red-600">
                        Start adding your favorite sneakers →
                    </a>
                </div>
            ) : (
                <>
                    <p className="text-white/60 font-mont mb-8">{wishlist.length} items in your wishlist</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wishlist.map(product => (
                            <div
                                key={product.id}
                                className="bg-white/80 rounded-2xl p-4 hover:shadow-lg transition transform hover:scale-105"
                            >
                                <div className="relative w-full h-40 bg-gray-500 rounded-lg mb-4 overflow-hidden">
                                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                    <button
                                        onClick={() => removeFromWishlist(product.id)}
                                        className="absolute top-2 right-2 bg-red-800 text-white rounded-full p-2 hover:bg-red-900 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <h3 className="text-black font-mont font-bold text-lg mb-2">{product.name}</h3>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-yellow-400 text-sm">★ {product.rating}</span>
                                    <span className="text-black/60 text-xs">({product.reviews})</span>
                                </div>

                                <p className="text-black font-mont font-bold text-lg mb-4">
                                    ₹{parseFloat(product.price).toLocaleString()}
                                </p>
                                
                                <div className="space-y-2">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="w-full bg-red-800 text-white font-mont font-bold py-2 rounded-lg hover:bg-red-900 transition"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full bg-white/10 text-white font-mont font-bold py-2 rounded-lg hover:bg-white/20 transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

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

export default Wishlist;
