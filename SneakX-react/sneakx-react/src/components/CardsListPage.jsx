import { useOutletContext } from 'react-router';
import CardListComponent from './CardList.jsx';
import AirForce from '../assets/CardImages/AirForce.png';
import OnitsukaTiger from '../assets/CardImages/OnitsukaTiger.png';
import Converse from '../assets/CardImages/Converse.png';
import Samba from '../assets/CardImages/Samba.png';
import NB9060 from '../assets/CardImages/NB9060-.png';
import PumaPalermo from '../assets/CardImages/palermo.png';

const CardsList = () => {
    const { products, addToCart } = useOutletContext();

    // Combine bestsellers with admin products
    const bestSellerProducts = [
        { id: 1, name: 'Onitsuka Tiger', price: '699.00', imageUrl: OnitsukaTiger },
        { id: 2, name: 'Nike Airforce 1', price: '409.00', imageUrl: AirForce },
        { id: 3, name: 'Converse All Star', price: '299.00', imageUrl: Converse },
        { id: 4, name: 'Addidas Samba', price: '499.00', imageUrl: Samba },
        { id: 5, name: 'New Balance 9060', price: '799.00', imageUrl: NB9060 },
        { id: 6, name: 'Puma Palermo', price: '399.00', imageUrl: PumaPalermo }
    ];

    const allProducts = [...bestSellerProducts, ...products];

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen w-screen bg-black p-10">
            <h1 className="text-white font-mont font-extrabold text-3xl mb-10">All Products</h1>
            <CardListComponent 
                products={allProducts} 
                onAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default CardsList;
