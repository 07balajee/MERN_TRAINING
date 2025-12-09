const Cards = ({products}) => {
    const {name,price,image}=products[0];
    return (
        <> 
           <h1 className="font-bold text-4xl font-mont text-center">Featurs</h1>
            <div className="border-2 border-yellow-600 rounded-lg m-4 p-4 w-64 bg-white hover:shadow-lg transition-shadow mt-30 ml-20 mr-20 mb-20">
                <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded"/>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">${price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Add to Cart
                </button>
            </div>
        </>
    )
}
export default Cards;