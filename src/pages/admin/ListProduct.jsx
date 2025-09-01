import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListProducts = () => {
    const [products, setProducts] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => {
        setProducts(data); 
      })
      .catch(err => console.error(err));
      fetch("http://localhost:5000/restaurants")
      .then(res => res.json())
      .then(data => setRestaurants(data))
      .catch(err => console.error(err));
      fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  const getRestaurantName = (id) => {
    const restaurant = restaurants.find(r => r.id === id);
    return restaurant ? restaurant.name : "Unknown";
  };
  const getCategoryName = (id) => {
    const category = categories.find(r => r.id === id);
    return category ? category.name : "Unknown";
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Food Item List</h2>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Available Restaurant</th>
                <th>Price ($)</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{getCategoryName(product.categoryId)}</td>
                    <td>{getRestaurantName(product.restaurantId)}</td>
                    <td>{product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
