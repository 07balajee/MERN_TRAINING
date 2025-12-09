import React,{ useState } from 'react'
import NavBar from "./components/NavBar"
import CardsList from "./components/CardsList"
import ProductForm from "./components/ProductForm"

import './App.css'

function App(){
  //array of objects of products
  const[products,setproducts]=useState([
    {
      id:1,
      name:"Office Chair",
      sellingPrice:"Rs. 2000",
      originalPrice:"Rs. 4000",
      image:"https://images.unsplash.com/photo-1567016541701-9f8e3f2f3f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      category:"Furnitures"
    }
  ])

  const addProduct = (newProduct) => {
    const productWithId = {
      id: products.length + 1,
      ...newProduct
    };
    setproducts([...products, productWithId]);
  };
  return(
     <>
      <NavBar/>
      <div className="flex flex-col items-center gap-8 p-8">
        <CardsList products={products}/>
        <ProductForm addProduct={addProduct}/>
      </div>
     </>
  )
}

export default App
