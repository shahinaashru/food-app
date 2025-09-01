import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import AdminLayout from '@/layouts/AdminLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './app/store';
import App from './App';
import Products from './pages/Products';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ErrorPage from './components/ErrorPage';
import ProductsByRestaurant from './pages/ProductsByRestaurant';
import ProductsByCategory from './pages/ProductsByCategory';
import PrdSearchSort from './components/ProductSearchSort';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import PaymentForm from './pages/PaymentForm';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import Orders from './pages/admin/Orders';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import AdminProfile from './pages/admin/Profile';
import AdminLogin from './pages/admin/AdminLogin';
import AddClients from './pages/admin/AddClients';
import AddProduct from './pages/admin/AddProduct';
import ListClients from './pages/admin/ListClients';
import ListProduct from './pages/admin/ListProduct';
const router = createBrowserRouter([
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [
       { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/cart', element: <Cart /> },
      { path: "*", element: <ErrorPage /> } ,
      { path: "/menubyrestaurant/:id", element: <ProductsByRestaurant /> } ,
      { path: "/menubycategory/:id", element: <ProductsByCategory /> } ,
      { path: "/prdsearch", element: <PrdSearchSort /> } ,
      { path: "/login", element: <Login /> } ,
      { path: "/signup", element: <SignUp /> } ,
      { path: "/checkout", element: <Checkout /> } ,
      { path: "/payment-form", element: <PaymentForm /> } ,
      { path: "/profile", element: <Profile /> } ,
      { path: "/contact", element: <Contact /> } ,
      { path: "/about", element: <About /> } ,
    ]
  },
  { path: "/admin-login", element: <AdminLogin /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    // element: <ProtectedAdmin>
    //   <AdminLayout />
    // </ProtectedAdmin>,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "orders", element: <Orders /> },
      { path: "admin-profile", element: <AdminProfile/> },
      { path: "settings", element: <Settings /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "add-clients", element: <AddClients /> },
      { path: "list-clients", element: <ListClients /> },
      { path: "list-product", element: <ListProduct /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);