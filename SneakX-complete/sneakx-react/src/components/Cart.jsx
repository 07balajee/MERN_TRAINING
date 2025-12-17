import { useOutletContext } from 'react-router-dom';
import ProductSummary from './ProductSummary.jsx';

const Cart = ()=>{
    const { cartItems, removeFromCart, updateCartQuantity } = useOutletContext();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen w-screen flex items-center justify-center">
                <h1 className="text-white font-mont font-extrabold text-3xl">Your cart is empty</h1>
            </div>
        );
    }

    return(
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-white font-mont font-extrabold text-3xl mb-10">Shopping Cart</h1>
            <div className="flex gap-10">
                <div className="flex-1">
                    {cartItems.map((item)=>(
                        <div key={item.id} className="w-full h-32 bg-white/8 border-1 border-white/20 rounded-2xl flex gap-5 p-5 mb-5">
                            <div className="w-32 h-32 bg-gray-500 rounded-xl">
                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-xl"/>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-white font-mont font-extrabold text-lg">{item.name}</h1>
                                    <h1 className="text-white/60 font-mont text-sm">Rs.{item.price}</h1>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <button
                                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                        className="bg-red-800 text-white px-3 py-1 rounded-lg hover:bg-red-900">
                                        -
                                    </button>
                                    <h1 className="text-white font-mont font-extrabold">{item.quantity}</h1>
                                    <button 
                                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                        className="bg-red-800 text-white px-3 py-1 rounded-lg hover:bg-red-900">
                                        +
                                    </button>
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-auto bg-red-900 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <ProductSummary cartItems={cartItems} />
                </div>
            </div>
        </div>
    )
}
export default Cart;