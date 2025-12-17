import {useState} from "react";

const ProductForm = ({addProduct})=>{
    const [formdata,setFormdata] = useState({
        name:'',
        price:'',
        category:'',
        imageUrl:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormdata((prevData)=>({
            ...prevData,
            [name]:value
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (formdata.name && formdata.price && formdata.category && formdata.imageUrl) {
            addProduct({
                name:formdata.name,
                price:formdata.price,
                category:formdata.category,
                imageUrl:formdata.imageUrl
            });
            setFormdata({
                name:'',
                price:'',
                category:'',
                imageUrl:''
            });
        } else {
            alert('Please fill all fields');
        }
    }

    return(
        <>
          <div className="w-100 h-120 bg-white/8 border-none rounded-2xl flex flex-col items-center justify-center">
            <h1 className=" text-white font-mont font-extrabold text-2xl mb-5">Add New Product</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Product Name" className=" w-64 h-10 rounded-xl p-2 bg-white/10 text-white border-1 border-white/50"/>
                <input type="text" name="price" value={formdata.price} onChange={handleChange} placeholder="Price" className=" w-64 h-10 rounded-xl p-2 bg-white/10 text-white border-1 border-white/50"/>
                <input type="text" name="category" value={formdata.category} onChange={handleChange} placeholder="Category" className=" w-64 h-10 rounded-xl p-2 bg-white/10 text-white border-1 border-white/50"/>
                <input type="text" name="imageUrl" value={formdata.imageUrl} onChange={handleChange} placeholder="Image URL" className=" w-64 h-10 rounded-xl p-2 bg-white/10 text-white border-1 border-white/50"/>
                <button type="submit" className=" bg-red-800 text-white font-mont font-extrabold w-full h-12 rounded-xl mt-5">Add Product</button>
            </form>
          </div>
        </>
    )
}
export default ProductForm;