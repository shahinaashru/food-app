import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBox } from "react-icons/bs"; 
import { BsCart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { FaClock} from "react-icons/fa";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [ordersCount, setOrdersCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [usersCount, setUsersCount] = useState(0); 
    const [ProductCount, setProductCount] = useState(0);

    useEffect(() => {
    // Fetch orders
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrdersCount(data.length);
      })
      .catch((err) => console.error(err));

    // Fetch users
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setUsersCount(data.length);
      })
      .catch((err) => console.error(err))
      fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setProductCount(data.length);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // stop loading after both fetches
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  // Example data
  const stats = [
    { title: "Total Restaurents", value:usersCount, icon: <FaUser size={30}/>, color: "#dba974ff" },
    { title: "Total Items", value: ProductCount, icon: <BsBox size={30} />, color: "#dba974ff" },
    { title: "Total Orders", value: 32, icon: <BsCart size={30}/>, color: "#dba974ff" },
    { title: "Pending Orders", value: ordersCount, icon: <BsHourglassSplit size={30}/>, color: "info" },
    { title: "Revenue", value: "$12,400", icon: <FaDollarSign size={30}/>, color: "danger" }
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className={`card text-white  h-100 shadow`} style={{ backgroundColor: "#ff6600" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <div style={{ fontSize: "2rem" }}>{stat.icon}</div>
                <h5 className="card-title mt-2">{stat.title}</h5>
                <h3 className="fw-bold">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Example grid for details */}
      <div className="card mt-4 shadow">
        <div className="card-header">
          <h5>Recent Activities</h5>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>New Client Added</td>
                <td><span className="badge bg-success">Completed</span></td>
                <td>2025-09-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Order Placed</td>
                <td><span className="badge bg-warning">Pending</span></td>
                <td>2025-08-30</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Payment Received</td>
                <td><span className="badge bg-primary">Completed</span></td>
                <td>2025-08-29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

