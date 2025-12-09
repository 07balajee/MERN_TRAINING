const NavBar = () =>{
    return(
       <>
       <div className="w-full h-20 roundex-xl border-none flex flex-row justify-between items-center">
         <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg" className="w-13 h-13"></img>
         <div className="flex flex-row justify-center gap-12 w-100 h-20 translate-y-4">
           <h2 className="font-mont font-bold text-2xl text-black">Home</h2>
           <h2 className="font-mont font-bold text-2xl text-black">Products</h2>
           <h2 className="font-mont font-bold text-2xl text-black">Orders</h2>
           <h2 className="font-mont font-bold text-2xl text-black">Cart</h2>
         </div>
         <h1 className="font-mont font-bold text-black text-2xl -translate-y-2 ">LogIN</h1>
       </div>
       </>
    )
}

export default NavBar;