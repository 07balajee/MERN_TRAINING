import Airjordan from '../assets/airjordan.png';
import AirForce from '../assets/CardImages/AirForce.png';
import OnitsukaTiger from '../assets/CardImages/OnitsukaTiger.png';
import Converse from '../assets/CardImages/Converse.png';
import Samba from '../assets/CardImages/Samba.png';
import NB9060 from '../assets/CardImages/NB9060-.png';
import PumaPalermo from '../assets/CardImages/palermo.png';

import AddidasLogo from '../assets/Logos/AddidasLogo.png';
import NikeLogo from '../assets/Logos/NikeLogo.png';
import Asicslogo from '../assets/Logos/Asicslogo.png';
import PumaLogo from '../assets/Logos/PumaLogo.png';
import NewBalanceLogo from '../assets/Logos/NewBalanceLogo.png';
import ConverseLogo from '../assets/Logos/ConverseLogo.png';

import rdSlide from '../assets/3rdSlide.jpg';
import { useOutletContext } from 'react-router';
import { useNavigate } from 'react-router';

const Home = () => {
    const { addToCart } = useOutletContext();
    const navigate = useNavigate();

    const bestSellerProducts = [
        { id: 1, name: 'Onitsuka Tiger', price: '10999.00', imageUrl: OnitsukaTiger },
        { id: 2, name: 'Nike Airforce 1', price: '4999.00', imageUrl: AirForce },
        { id: 3, name: 'Converse All Star', price: '6999.00', imageUrl: Converse },
        { id: 4, name: 'Addidas Samba', price: '9999.00', imageUrl: Samba },
        { id: 5, name: 'New Balance 9060', price: '7999.00', imageUrl: NB9060 },
        { id: 6, name: 'Puma Palermo', price: '4499.00', imageUrl: PumaPalermo }
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="min-h-screen w-screen flex flex-col bg-black">
            
            {/* Hero Section */}
            <div className="flex w-full gap-10 px-10 py-20">
                <div className="flex-1 flex items-center justify-center">
                    <img src={Airjordan} alt="Nike Shoes" className="w-160 h-94 object-cover rounded-lg"/>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-5">
                    <h1 className="font-mont text-white font-extrabold text-5xl">LIMITED</h1>
                    <h1 className="font-mont text-red-800 font-extrabold text-6xl">KICKS</h1>
                    <h1 className="font-mont text-white font-extrabold text-6xl">REVOLUTION.</h1>
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-6 py-2 font-mont font-bold rounded-lg hover:bg-gray-200">Shop Now</button>
                        <button className="bg-red-900 text-white px-6 py-2 font-mont font-bold rounded-lg hover:bg-red-800">Explore</button>
                    </div>
                </div>
            </div>

            {/* Brands Section */}
            <div className="px-10 py-10">
                <h1 className="text-white font-extrabold font-mont text-4xl mb-8">We Design, Craft and Deliver</h1>
                <div className="flex flex-row items-center gap-40 overflow-x-auto pb-5">
                    <div className="w-24 h-24 flex-shrink-0"><img src={NikeLogo} alt="Nike Logo" className="w-full h-full object-contain"/></div>
                    <div className="w-24 h-24 flex-shrink-0"><img src={AddidasLogo} alt="Addidas Logo" className="w-full h-full object-contain"/></div>
                    <div className="w-24 h-24 flex-shrink-0"><img src={Asicslogo} alt="Asics Logo" className="w-full h-full object-contain"/></div>
                    <div className="w-24 h-24 flex-shrink-0"><img src={PumaLogo} alt="Puma Logo" className="w-full h-full object-contain"/></div>
                    <div className="w-24 h-24 flex-shrink-0"><img src={NewBalanceLogo} alt="New Balance Logo" className="w-full h-full object-contain"/></div>
                    <div className="w-24 h-24 flex-shrink-0"><img src={ConverseLogo} alt="Converse Logo" className="w-full h-full object-contain"/></div>
                </div>
            </div>

            {/* Best Sellers Section */}
            <div className="flex flex-col gap-8 px-10 py-10 bg-white/8 backdrop-blur rounded-3xl mx-10 mb-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl text-white font-extrabold font-mont">Best Sellers</h1>
                    <h2 className="text-white text-xl font-bold font-mont cursor-pointer hover:text-red-800 transition" onClick={() => navigate('/cardsList')}>See All</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bestSellerProducts.map((product) => (
                        <div key={product.id} className="bg-white/80 border-none rounded-2xl p-4 flex flex-col gap-3 hover:shadow-lg transition">
                            <div className="w-full h-40 bg-gray-500 rounded-2xl overflow-hidden">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover"/>
                            </div>
                            <h1 className="text-black font-mont font-bold text-lg">{product.name}</h1>
                            <h1 className="text-black font-mont font-bold text-lg">Rs.{product.price}</h1>
                            <div className="flex gap-2">
                                <button onClick={() => handleAddToCart(product)} className="flex-1 bg-red-800 text-white border-none rounded-lg py-2 font-mont font-bold cursor-pointer hover:bg-red-900">Add to cart</button>
                                <button className="flex-1 border-2 border-red-800 text-black rounded-lg py-2 font-mont font-bold cursor-pointer hover:bg-gray-200">See Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotion Section */}
            <div className="px-10 py-10 relative">
                <img src={rdSlide} alt="sambaDisplay" className="w-full h-80 rounded-2xl brightness-50 drop-shadow-xl object-cover"/>
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                    <h1 className="text-white font-extrabold font-mont text-5xl mb-5">Max Your Sneaker Game</h1>
                    <p className="text-white/70 text-lg font-mont font-semibold max-w-2xl mb-5">
                        Our sneakers aren't just footwear they are a statement. Crafted by the best in the industry,
                        each pair combines cutting-edge design with unparalleled comfort. Whether you're hitting
                        the streets or making a statement, SneakX has the perfect pair to elevate your style and performance.
                    </p>
                    <h2 className="text-white font-extrabold font-mont text-3xl mb-3">Discover the Classics</h2>
                    <button className="bg-red-800 text-white border-none px-6 py-2 font-mont font-bold rounded-lg hover:bg-red-900">Shop Now</button>
                </div>
            </div>

            {/* Footer */}
            <div id="footer" className="w-screen bg-white/80 mt-10 py-8">
            
            </div>
        </div>
    );
};

export default Home;
