import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
       <>
         <div className="flex flex-row justify-between items-center w-full px-10 py-6 bg-black border-b border-white/10">
            <div className="text-red-800 font-extrabold font-mont text-3xl">SneakX</div>
            <div className="flex flex-row items-center gap-10">
               <Link to="/" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Home</Link>
               <Link to="/search" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Shop</Link>
               <Link to="/wishlist" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">♡</Link>
               <Link to="/login" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Login</Link>
               <Link to="/cart" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Cart</Link>
               <Link to="/orders" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Orders</Link>
               <Link to="/admin" className="text-white font-mont font-bold text-lg hover:text-red-800 transition">Admin</Link>
            </div>
        </div>
       </>
    )
}
export default Header;