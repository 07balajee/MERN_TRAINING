const CardsList = ({products, onAddToCart, onViewDetails})=>{
    return(
        <div className="grid grid-cols-3 gap-10 p-10">
            {products.map((product)=>(
                <div key={product.id} className="w-100 h-90 bg-white/80 border-none rounded-2xl">
                    <div className="w-100 h-50 bg-gray-500 rounded-2xl">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-black font-mont font-extrabold translate-x-10 translate-y-5">{product.name}</h1>
                    <h1 className="text-black font-mont font-extrabold translate-x-10 translate-y-5">${product.price}</h1>
                    <button 
                        onClick={() => onAddToCart && onAddToCart(product)}
                        className="bg-red-800 text-white border-none rounded-xl w-30 h-12 translate-x-10 translate-y-10 cursor-pointer hover:bg-red-900">
                        Add to cart
                    </button>
                    <button 
                        onClick={() => onViewDetails && onViewDetails(product)}
                        className="border-2 text-black translate-x-20 translate-y-10 w-30 h-12 rounded-xl cursor-pointer hover:bg-gray-200">
                        See Details
                    </button>
                </div>
            ))}
        </div>
    )
}
export default CardsList;