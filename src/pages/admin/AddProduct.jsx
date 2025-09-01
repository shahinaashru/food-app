import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  fetch("http://localhost:5000/restaurants")
      .then(res => res.json())
      .then(data => setRestaurants(data))
      .catch(err => console.error(err));
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProduct(prev => ({ ...prev, image: imageURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data:", product);
    alert("Product added successfully!");
    // Here you can save to backend or localStorage
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Food Item</h2>
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Category</option>{categories.length > 0 ? (
        categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
              </select>
            </div>
             <div className="mb-3">
              <label className="form-label">Restaurant</label>
              <select
                name="restaurant"
                value={product.restaurant}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Restaurant</option>{restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.name}>
            {restaurant.name}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
              </select>
            </div>

            {/* Price & Quantity */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  className="form-control"
                  min="0"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
              />
              {product.image && (
                <img
                  src={product.image}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
              )}
            </div>

            <button type="submit" className="btn" style={{backgroundColor:'#ff6600',color:'#fff'}}>
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
