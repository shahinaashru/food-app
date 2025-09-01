import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/orders")
    .then(res => res.json())
    .then(data => {
      setOrders(data); 
    })
    .catch(err => console.error(err));
}, []);
  const updateStatus = (id, newStatus) => {
    setOrders(prev =>
      prev.map(order => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Orders</h2>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Client Name</th>
                 <th>Email</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {Array.isArray(orders) && orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.email}</td>
                  <td>{order.total}</td>
                  <td>
                    {order.status === "Pending" && <span className="badge bg-warning">{order.status}</span>}
                    {order.status === "Completed" && <span className="badge bg-success">{order.status}</span>}
                    {order.status === "Canceled" && <span className="badge bg-danger">{order.status}</span>}
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => updateStatus(order.id, "Completed")}
                    >
                      Complete
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => updateStatus(order.id, "Canceled")}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No orders found.
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

export default Orders;

