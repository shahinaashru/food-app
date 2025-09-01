import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    address: "",
    contact: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setRestaurants(prev => ({ ...prev, image: imageURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restaurant data:", restaurant);
    alert("Resturant added successfully!");
    // Here you can save to backend or localStorage
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Restaurant</h2>
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-3">
              <label className="form-label">Restaurant Name</label>
              <input
                type="text"
                name="name"
                value={restaurant.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="description"
                value={restaurant.address}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              />
            </div>

            {/* Price & Quantity */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input
                  type="number"
                  name="price"
                  value={restaurant.contact}
                  onChange={handleChange}
                  className="form-control"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label className="form-label">Restaurant Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
              />
              {restaurant.image && (
                <img
                  src={restaurant.image}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
              )}
            </div>

            <button type="submit" className="btn" style={{backgroundColor:'#ff6600',color:'#fff'}}>
              Add Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
