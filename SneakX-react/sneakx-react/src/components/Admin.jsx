import { useOutletContext } from 'react-router';
import ProductForm from './ProductForm.jsx';
import CardList from './CardList.jsx';

const Admin = () =>{
    const { products, addProduct } = useOutletContext();

    return(
        <div className="min-h-screen w-screen flex flex-col bg-black p-10">
            <h1 className="text-white font-mont font-extrabold text-4xl mb-10">Admin Dashboard</h1>
            <div className="flex flex-col gap-10">
                <ProductForm addProduct={addProduct} />
                {products.length > 0 && (
                    <div>
                        <h2 className="text-white font-mont font-extrabold text-2xl mb-5">Added Products</h2>
                        <CardList products={products} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Admin;