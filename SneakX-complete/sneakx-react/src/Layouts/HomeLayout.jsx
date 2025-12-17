import { Outlet } from "react-router";
import { useState } from 'react';
import Header from '../components/Header.jsx';

const HomeLayout = () =>{
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);

    const addProduct = (newProduct) => {
        const product = {
            ...newProduct,
            id: Date.now()
        };
        setProducts([...products, product]);
    };

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const updateCartQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(cartItems.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            ));
        }
    };

    const proceedToCheckout = async (addressData) => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Create order with timestamp and address
        const newOrder = {
            items: cartItems,
            totalAmount: cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0),
            orderDate: new Date().toLocaleDateString(),
            orderTime: new Date().toLocaleTimeString(),
            deliveryAddress: {
                fullName: addressData.fullName,
                email: addressData.email,
                phone: addressData.phone,
                address: addressData.address,
                city: addressData.city,
                state: addressData.state,
                zipCode: addressData.zipCode
            }
        };

        try {
            // Send order to backend
            const response = await fetch('http://localhost:3000/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            });

            const data = await response.json();

            if (data.success) {
                console.log('Order saved to database:', data.order);
                setOrders([...orders, { ...newOrder, _id: data.order._id }]);
                setCartItems([]); // Clear cart after checkout
                alert('Order placed successfully!');
            } else {
                alert('Error placing order: ' + data.message);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            // Fallback to local storage if backend fails
            setOrders([...orders, { ...newOrder, id: Date.now() }]);
            setCartItems([]);
            alert('Order placed (local). Note: Backend connection failed.');
        }
    };

    return(
        <>
           <Header/>
           <Outlet context={{ 
               products, 
               setProducts, 
               cartItems, 
               setCartItems, 
               addProduct, 
               addToCart, 
               removeFromCart, 
               updateCartQuantity,
               orders,
               proceedToCheckout
           }} />
        </>
    )
}
export default HomeLayout;