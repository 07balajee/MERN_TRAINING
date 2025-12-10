import {Link} from 'react-router';
const Header = ()=>{
    return(
        <>
          <div className="flex justify-center items-center bg-gray-800 text-white p-4 text-2xl font-bold">
            <Link to="/home" className="m-4 p-2 bg-white text-black rounded-md">Home</Link>
            <Link to="/products" className="m-4 p-2 bg-white text-black rounded-md">Products</Link>
            <Link to="/about" className="m-4 p-2 bg-white text-black rounded-md">About</Link>
            <Link to="/contact" className="m-4 p-2 bg-white text-black rounded-md">Contact</Link>
            <Link to="/login" className="m-4 p-2 bg-white text-black rounded-md">Login</Link>
            <Link to="/blogs" className="m-4 p-2 bg-white text-black rounded-md">Blogs</Link>
            </div>
          
        </>
    )
}
export default Header;