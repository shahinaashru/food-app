import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListClients = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [menus, setMenus] = useState([]);
     useEffect(() => {
          fetch("http://localhost:5000/restaurants")
          .then(res => res.json())
          .then(data => setRestaurants(data))
          .catch(err => console.error(err));
      fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => {
        setMenus(data); 
      })
      .catch(err => console.error(err));
  }, []);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );
const getMenuNames = (menuIds) => {
  if (!Array.isArray(menuIds) || menuIds.length === 0) {
    return "No Menu";
  }

  if (!Array.isArray(menus) || menus.length === 0) {
    console.log(menus);
    return "Loading...";
  }

  return menuIds
    .map((id) => {
      const menuItem = menus.find((item) => item.id === id);
      return menuItem ? menuItem.title : "Unknown";
    })
    .join(", ");
};



  return (
    <div className="container mt-4">
      <h2 className="mb-4">Restaurant List</h2>

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
                <th>Menu Items</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map(restaurant => (
                  <tr key={restaurant.id}>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.name}</td>
                    <td>{getMenuNames(restaurant.menu)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(restaurants.id)}
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

export default ListClients;
