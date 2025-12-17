import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductForm from './ProductForm.jsx';
import CardList from './CardList.jsx';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000';

const Admin = () =>{
    const { products, addProduct } = useOutletContext();
    const [expressProducts, setExpressProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            toast.error('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (newProduct) => {
        const token = sessionStorage.getItem('token');
        
        try {
            const response = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: newProduct.name,
                    price: newProduct.price,
                    imageUrl: newProduct.imageUrl,
                    description: newProduct.description
                }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Product added successfully!');
                fetchProducts();
                addProduct(newProduct);
            } else {
                toast.error(data.message || 'Error adding product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Error adding product');
        }
    };

    return(
        <div className="min-h-screen w-screen flex flex-col bg-black p-10">
            <h1 className="text-white font-mont font-extrabold text-4xl mb-10">Admin Dashboard</h1>
            <div className="flex flex-col gap-10">
                <ProductForm addProduct={handleAddProduct} />
                {expressProducts.length > 0 && (
                    <div>
                        <h2 className="text-white font-mont font-extrabold text-2xl mb-5">All Products (Express)</h2>
                        <CardList products={expressProducts} />
                    </div>
                )}
                {products.length > 0 && (
                    <div>
                        <h2 className="text-white font-mont font-extrabold text-2xl mb-5">Local Products</h2>
                        <CardList products={products} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Admin;