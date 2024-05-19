import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Invioce from '../components/invoice';
import Layout from '../container/layout';
import AddProduct from '../pages/addProduct';
import Cards from '../pages/card';
import CardPage from '../pages/cardpage';
import Dashboard from '../pages/dashboard';
import GetInvoice from '../pages/getinvoice';
import Login from '../pages/login';
import Package from '../pages/package';
import Products from '../pages/products';
import Register from '../pages/register';
import UserDetails from '../pages/userdetail';
import Users from '../pages/users';
import UserUpdate from '../pages/userUpdate';
import Vendors from '../pages/vendor';

const openRoutes = [
  { path: '/', element: <Login /> },
  { path: '*', element: <Login /> },
  {path: "/register", exact: true, element:<Register/>},
];

const protectedRoutes = [
  //side bars
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/users', element: <Users /> },
  { path: '/cards', element: <Cards /> },
  { path: '/vendors', element: <Vendors /> },
  { path: '/package', element: <Package /> },
  { path: '/products', element: <Products /> },
  { path: '/add-products', element: <AddProduct /> },
  //inside user page
  { path: '/users/user-details/:id', element: <UserDetails /> },
  { path: '/users/add-cards/:id', element: <CardPage /> },
  // { path: '/users/user-card/:id', element: <UserDetails /> },
  // { path: '/get-invoice/:id', element: <GetInvoice /> },
  { path: '/users/get-invoice/:id', element: <Invioce /> },
  { path: '/users/user-edit/:id', element: <UserUpdate /> },
  //inside add product
];

const RoutesPages = () => {
  const [allRoutes, setAllRoutes] = useState([]);
  let isLoggedIn = localStorage.getItem('token');

    useEffect(() => {
      if (isLoggedIn) {
        setAllRoutes([ ...protectedRoutes]);
        console.log(allRoutes)
      } else {
        setAllRoutes([...openRoutes]);
        console.log(allRoutes)
      }

    }, [isLoggedIn]);

  const generateRoute = (routes) => {
    return routes.map(({ path, element }, i) => (
      <Route key={i} path={path} element={element} />
    ));
  };

  // const generateRoute = (routes) => {
  //   let routeElements = [];
  //   routes.map(({ path, element, navigate, ...route }, i) => {
  //     routeElements.push(
  //       <Route
  //         path={path}
  //         key={i}
  //         exact={true}
  //         element={
  //           navigate ? <Navigate replace to="/dashboard" /> : element
  //         }
  //       />
  //     );
  //   });

  //   return <Routes>{routeElements}</Routes>;
  // };
  
  return (
    <Layout>
      <Routes>
        {generateRoute(allRoutes)}
      </Routes>
    </Layout>
  );
};

export default RoutesPages;
