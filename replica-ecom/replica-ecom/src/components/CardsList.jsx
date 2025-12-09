import React from "react";

const CardsList = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-yellow-600 rounded-lg p-4 w-64 bg-white hover:shadow-lg transition-shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold text-yellow-600">{product.sellingPrice}</span>
              <span className="line-through text-gray-500 ml-2">{product.originalPrice}</span>
            </p>
            <p className="text-sm text-gray-600 mb-4 flex-grow">Category: {product.category}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsList;