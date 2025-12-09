import ProductCard from "./ProductCart";

const ProductList = ()=>{
    const products=[
        {
            id:1,
            name:"CASIO",
            price:5000.00,
            image:"./assets/casio.png"
        },
        {
            id:2,
             name:"Product 2",
            price:100.00,
            image:"./assets/fossil.png"
        },
        {
            id:3,
             name:"Product 3",
            price:100.00,
            image:"./assets/seiko.png"
        }
    ]

    return(
        <div className="mx">
        {products.map(product =>(
            <ProductCard id={product.id}
                         name={product.name}
                         price={product.price}
                         image={product.image}
            />
        ))}
        </div>
    )
}
export default ProductList;