import { useOutletContext } from 'react-router';

const Orders = () =>{
    const { orders } = useOutletContext();

    if (orders.length === 0) {
        return(
            <div className="min-h-screen w-screen bg-black flex items-center justify-center p-10">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-extrabold font-mont mb-5">Orders</h1>
                    <p className="text-xl text-white/60 font-mont">You don't have any orders yet.</p>
                </div>
            </div>
        );
    }

    return(
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-5xl text-white font-extrabold font-mont mb-10">Your Orders</h1>
            
            <div className="grid grid-cols-1 gap-8">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white/8 border-1 border-white/20 rounded-2xl p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl text-white font-mont font-extrabold mb-2">Order #{order.id}</h2>
                                <p className="text-white/60 font-mont">{order.orderDate} at {order.orderTime}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white/60 font-mont text-sm mb-1">Total Amount</p>
                                <p className="text-3xl text-red-800 font-mont font-extrabold">${order.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Delivery Address */}
                        <div className="bg-black/30 rounded-lg p-4 mb-6 border border-white/10">
                            <h3 className="text-lg text-white font-mont font-bold mb-3">Delivery Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 font-mont text-sm">
                                <div>
                                    <p className="text-white/60 text-xs">Name</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.fullName}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Email</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.email}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Phone</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.phone}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Address</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.address}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">City</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.city}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">State</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.state || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Zip Code</p>
                                    <p className="text-white font-semibold">{order.deliveryAddress.zipCode}</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/20 pt-6">
                            <h3 className="text-lg text-white font-mont font-bold mb-4">Items</h3>
                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex gap-6 bg-black/30 p-4 rounded-lg">
                                        <div className="w-20 h-20 bg-gray-500 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-mont font-bold text-lg mb-2">{item.name}</h4>
                                            <div className="flex justify-between items-end">
                                                <p className="text-white/60 font-mont">Quantity: <span className="text-white font-bold">{item.quantity}</span></p>
                                                <p className="text-white font-mont font-bold">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Orders;