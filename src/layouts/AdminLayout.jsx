import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar text-white vh-100">
          <div className="p-3">
            <img
              src="../src/images/logo.jpg" // Replace with the path to your selected icon
              alt="Restaurant Icon"
              style={{ width: '150px', height: '40px' }}
            />
            <ul className="nav flex-column mt-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/settings">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/add-clients">
                  Add Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/list-clients">
                  List Restaurants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/add-product">
                  Add Food Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/list-product">
                  List Food Items
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
