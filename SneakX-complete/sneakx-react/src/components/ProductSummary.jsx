import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Checkout from './Checkout.jsx';

const ProductSummary = ({cartItems}) =>{
    const [showCheckout, setShowCheckout] = useState(false);
    
    let subtotal=0;
    for(const items of cartItems){
        const price = typeof items.price === 'string' ? parseFloat(items.price.replace(/[^0-9.]/g, '')) : parseFloat(items.price);
        subtotal += price * items.quantity;
    }
    
    const handleCheckout = () => {
        setShowCheckout(true);
    };
    
    return(
        <>
          <div className="w-80 h-min bg-white/8 rounded-2xl border-1 p-5 flex flex-col gap-5 sticky top-10">
            <h1 className="text-white font-mont font-extrabold text-2xl">Order Summary</h1>

            <div className="flex flex-col gap-4 justify-between max-h-96 overflow-y-auto">
                {cartItems.map((item)=>(
                    <div key={item.id} className="flex flex-row justify-between w-full">
                        <h1 className="text-white font-mont font-extrabold text-lg">{item.name} x {item.quantity}</h1>
                        <h1 className="text-white/70 font-mont text-sm">${(parseFloat(item.price) * item.quantity).toFixed(2)}</h1>
                    </div>
                ))}
            </div>

            <div className="flex flex-row justify-between border-t-2 pt-3">
                <h1 className="text-white font-mont font-extrabold text-lg">Subtotal</h1>
                <h1 className="text-white font-mont font-extrabold text-lg">${subtotal.toFixed(2)}</h1>
            </div>
            
            <button 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="bg-red-800 text-white font-mont font-extrabold w-full h-12 rounded-lg mt-5 hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                Proceed to Checkout
            </button>
          </div>
          <Checkout isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
        </>
    )
}
export default ProductSummary;