import {Link} from 'react-router';
const ProductCard = (props) => {
    console.log(props)
    const { id, name, price, image } = props;
    
    return (
    <Link to={`/products/${id}`}>
      <div className="border p-4 rounded shadow-md cursor-pointer hover:shadow-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 font-semibold">₹{price}</p>
      </div>
    </Link>
    );
};
export default ProductCard;