import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useOutletContext } from 'react-router';

const Checkout = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const { cartItems, proceedToCheckout } = useOutletContext();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.address || !formData.city || !formData.zipCode || !formData.phone) {
            alert('Please fill all required fields');
            return;
        }
        proceedToCheckout(formData);
        onClose();
        navigate('/orders');
    };

    if (!isOpen) return null;

    const subtotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-black border-2 border-white/20 rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl text-white font-mont font-extrabold">Checkout</h2>
                        <button 
                            onClick={onClose}
                            className="text-white/60 hover:text-white text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Delivery Information */}
                        <div className="col-span-2 lg:col-span-1">
                            <h3 className="text-xl text-white font-mont font-bold mb-4">Delivery Address</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="text-white font-mont text-sm mb-2 block">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                    />
                                </div>

                                <div>
                                    <label className="text-white font-mont text-sm mb-2 block">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                    />
                                </div>

                                <div>
                                    <label className="text-white font-mont text-sm mb-2 block">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                    />
                                </div>

                                <div>
                                    <label className="text-white font-mont text-sm mb-2 block">Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main Street"
                                        className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-white font-mont text-sm mb-2 block">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="New York"
                                            className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white font-mont text-sm mb-2 block">State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="NY"
                                            className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-white font-mont text-sm mb-2 block">Zip Code *</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        placeholder="10001"
                                        className="w-full bg-white/10 border-1 border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-red-800"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="col-span-2 lg:col-span-1">
                            <h3 className="text-xl text-white font-mont font-bold mb-4">Order Summary</h3>
                            <div className="bg-white/8 rounded-lg p-4 space-y-3 max-h-96 overflow-y-auto mb-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between text-white/80 text-sm">
                                        <span className="font-mont">{item.name} x {item.quantity}</span>
                                        <span className="font-mont font-bold">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/20 pt-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-white font-mont font-bold">Total Amount:</span>
                                    <span className="text-2xl text-red-800 font-mont font-extrabold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 bg-white/10 text-white font-mont font-bold py-3 rounded-lg hover:bg-white/20 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="flex-1 bg-red-800 text-white font-mont font-bold py-3 rounded-lg hover:bg-red-900 transition"
                                    >
                                        Complete Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;