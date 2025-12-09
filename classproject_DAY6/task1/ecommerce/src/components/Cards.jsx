import Airforce from "../assets/AirForce.png"

const Cards = () =>{
    return(
        <>
            <div class="w-100 h-90 bg-white/80 border-none rounded-2xl">
                <div class="w-100 h-50 bg-gray-500 rounded-2xl"><img src={Airforce} alt="Nike Airforce 1"/></div>
                <h1 class="text-black font-mont font-extrabold translate-x-10 translate-y-5">Nike Airforce 1</h1>
                <h1 class="text-black font-mont font-extrabold translate-x-10 translate-y-5">$409.00</h1>
                <button class="bg-red-800 text-white border-none rounded-xl w-30 h-12 translate-x-10 translate-y-10">Add to cart</button>
                <button class="border-2 text-black translate-x-20 translate-y-10 w-30 h-12 rounded-xl">See Details</button>
            </div>
        </>
    )
};
export default Cards;