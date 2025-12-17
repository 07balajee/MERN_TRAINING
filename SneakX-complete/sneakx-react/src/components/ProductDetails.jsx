import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const ProductDetails = ({ product, onClose }) => {
    const { addToCart } = useOutletContext();
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart({
                ...product,
                selectedSize: selectedSize
            });
        }
        alert(`${quantity}x ${product.name} added to cart!`);
        onClose();
    };

    const handleAddToWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const exists = wishlist.some(item => item.id === product.id);
        
        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert(`${product.name} added to wishlist!`);
        } else {
            alert(`${product.name} is already in your wishlist!`);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-black border-2 border-white/20 rounded-2xl max-w-4xl w-full my-10">
                <div className="p-8">
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl"
                    >
                        ✕
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="flex items-center justify-center">
                            <div className="w-full h-96 bg-gray-500 rounded-lg overflow-hidden">
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {/* Header */}
                                <div className="mb-4">
                                    <p className="text-red-800 font-mont font-bold text-sm mb-2">{product.category}</p>
                                    <h1 className="text-4xl text-white font-mont font-extrabold mb-3">{product.name}</h1>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex text-yellow-400">
                                            {'★'.repeat(Math.floor(product.rating))}
                                            {product.rating % 1 !== 0 && '⭐'}
                                        </div>
                                        <span className="text-white/70 font-mont text-sm">
                                            {product.rating} ({product.reviews} reviews)
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <p className="text-white/60 font-mont text-sm mb-1">Price</p>
                                    <p className="text-4xl text-red-800 font-mont font-extrabold">₹{parseFloat(product.price).toLocaleString()}</p>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <p className="text-white/80 font-mont leading-relaxed">{product.description}</p>
                                </div>

                                {/* Stock Status */}
                                <div className="mb-6">
                                    {product.inStock ? (
                                        <p className="text-green-400 font-mont font-bold">✓ In Stock</p>
                                    ) : (
                                        <p className="text-red-400 font-mont font-bold">Out of Stock</p>
                                    )}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <p className="text-white font-mont font-bold mb-3">Select Size</p>
                                <div className="grid grid-cols-4 gap-2">
                                    {product.sizes && product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`py-2 px-3 rounded-lg font-mont font-bold transition ${
                                                selectedSize === size
                                                    ? 'bg-red-800 text-white'
                                                    : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="mb-6">
                                <p className="text-white font-mont font-bold mb-3">Quantity</p>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-mont font-bold"
                                    >
                                        −
                                    </button>
                                    <span className="text-white font-mont text-xl font-bold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-mont font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 bg-white/10 text-white font-mont font-bold py-3 rounded-lg hover:bg-white/20 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={!product.inStock}
                                        className="flex-1 bg-red-800 text-white font-mont font-bold py-3 rounded-lg hover:bg-red-900 transition disabled:opacity-50"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToWishlist}
                                    className="w-full bg-white/10 text-white font-mont font-bold py-3 rounded-lg hover:bg-white/20 transition"
                                >
                                    ♡ Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
