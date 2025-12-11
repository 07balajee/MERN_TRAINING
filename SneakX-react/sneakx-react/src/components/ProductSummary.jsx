const ProductSummary = ({cartItems}) =>{
     let subtotal=0;
     for(const items of cartItems){
        const price = parseFloat(items.price.replace('Rs.',''));
        subtotal += price * items.quantity;
     }
    
     return(
        <>
          <div className=" w-80 h-min bg-white/8 rounded-2xl border-1 p-5 flex flex-col gap-5">
            <h1 className=" text-white font-mont font-extrabold text-2xl ">Order Summary</h1>


            <div className=" flex flex-col gap-4 justify-between">
                {cartItems.map((item)=>(
                    <div key={item.id} className=" flex flex-row justify-between w-full">
                        <h1 className=" text-white font-mont font-extrabold text-lg ">{item.name} x {item.quantity}</h1>
                    </div>
                ))}
            </div>

            <div className=" flex flex-row justify-between border-t-2 pt-3">
                <h1 className=" text-white font-mont font-extrabold text-lg ">Subtotal</h1>
                <h1 className=" text-white font-mont font-extrabold text-lg ">Rs.{subtotal.toFixed(2)}</h1>
            </div>
            
            <button className=" bg-red-800 text-white font-mont font-extrabold w-full h-12 rounded-xl mt-5">Proceed to Checkout</button>
          </div>
        </>
     )
}
export default ProductSummary;