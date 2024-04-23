import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../container/layout';
import AddProduct from '../pages/addProduct';
import Cards from '../pages/card';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Package from '../pages/package';
import Products from '../pages/products';
import Users from '../pages/users';
import Vendors from '../pages/vendor';

const openRoutes = [
  { path: '/', exact: true, component: Login },
  { path: '*', exact: true, component: Login },
];

const protectedRoutes = [
  { path: '/dashboard', exact: true, component: Dashboard },
  { path: '/products', exact: true, component: Products },
  { path: '/vendors', exact: true, component: Vendors },
  { path: '/package', exact: true, component: Package },
  { path: '/cards', exact: true, component: Cards },
  { path: '/users', exact: true, component: Users },
  { path: '/add-products', exact: true, component: AddProduct },
];

const RoutesPages = () => {
  const generateRoute = (routes) => {
    return routes.map(({ path, component: Component }, i) => (
      <Route key={i} path={path} element={<Component />} />
    ));
  };

  return (
    <div>
      <Layout>
        <Routes>
          {/* {generateRoute(openRoutes)} */}
          {generateRoute(protectedRoutes)}
        </Routes>
      </Layout>
    </div>
  );
};

export default RoutesPages;
