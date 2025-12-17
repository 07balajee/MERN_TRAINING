import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardListComponent from './CardList.jsx';
import { toast } from 'react-toastify';
import AirForce from '../assets/CardImages/AirForce.png';
import OnitsukaTiger from '../assets/CardImages/OnitsukaTiger.png';
import Converse from '../assets/CardImages/Converse.png';
import Samba from '../assets/CardImages/Samba.png';
import NB9060 from '../assets/CardImages/NB9060-.png';
import PumaPalermo from '../assets/CardImages/palermo.png';

const API_URL = 'http://localhost:3000';

const CardsList = () => {
    const { products, addToCart } = useOutletContext();
    const [expressProducts, setExpressProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const bestSellerProducts = [
        { id: 1, name: 'Onitsuka Tiger', price: '699.00', imageUrl: OnitsukaTiger },
        { id: 2, name: 'Nike Airforce 1', price: '409.00', imageUrl: AirForce },
        { id: 3, name: 'Converse All Star', price: '299.00', imageUrl: Converse },
        { id: 4, name: 'Addidas Samba', price: '499.00', imageUrl: Samba },
        { id: 5, name: 'New Balance 9060', price: '799.00', imageUrl: NB9060 },
        { id: 6, name: 'Puma Palermo', price: '399.00', imageUrl: PumaPalermo }
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products`);
            const data = await response.json();
            setExpressProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Error fetching products from server');
        } finally {
            setLoading(false);
        }
    };

    const allProducts = [...bestSellerProducts, ...expressProducts, ...products];

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-white font-mont font-extrabold text-3xl mb-10">All Products</h1>
            {loading ? (
                <div className="text-white text-center">Loading products...</div>
            ) : (
                <CardListComponent 
                    products={allProducts} 
                    onAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};

export default CardsList;
