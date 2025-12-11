import { Outlet } from "react-router";
import { useState } from 'react';
import Header from '../components/Header.jsx';

const HomeLayout = () =>{
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

    return(
        <>
           <Header/>
           <Outlet context={{ products, setProducts, cartItems, setCartItems, addProduct, addToCart, removeFromCart, updateCartQuantity }} />
        </>
    )
}
export default HomeLayout;