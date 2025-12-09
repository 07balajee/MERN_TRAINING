import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    originalPrice: '',
    sellingPrice: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!formData.name || !formData.image || !formData.originalPrice || !formData.sellingPrice || !formData.category) {
      alert('Please fill all fields');
      return;
    }

    // Call addProduct with form data
    addProduct({
      name: formData.name,
      image: formData.image,
      originalPrice: formData.originalPrice,
      sellingPrice: formData.sellingPrice,
      category: formData.category
    });

    // Reset form
    setFormData({
      name: '',
      image: '',
      originalPrice: '',
      sellingPrice: '',
      category: ''
    });
  };

  return (
    <div className="w-[300px] bg-yellow-200 rounded-xl flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-black">Add products</h1>
      <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
        <label className="text-xl text-black">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mb-2 p-1 rounded-lg border-2 border-black w-full"
          value={formData.name}
          onChange={handleChange}
        />
        
        <label className="text-xl text-black">Image Url</label>
        <input
          type="text"
          name="image"
          placeholder="Image Url"
          className="border-2 border-black mb-2 p-1 rounded-lg w-full"
          value={formData.image}
          onChange={handleChange}
        />
        
        <label className="text-xl text-black">Selling Price</label>
        <input
          type="text"
          name="sellingPrice"
          placeholder="Selling Price"
          className="border-2 border-black mb-2 p-1 rounded-lg w-full"
          value={formData.sellingPrice}
          onChange={handleChange}
        />
        
        <label className="text-xl text-black">Original Price</label>
        <input
          type="text"
          name="originalPrice"
          placeholder="Original Price"
          className="border-2 border-black mb-2 p-1 rounded-lg w-full"
          value={formData.originalPrice}
          onChange={handleChange}
        />
        
        <label className="text-black text-xl">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border-2 border-black mb-2 p-1 rounded-lg w-full"
          value={formData.category}
          onChange={handleChange}
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
