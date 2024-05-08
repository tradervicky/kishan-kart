import React from 'react';
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
import UserDetails from '../pages/userdetail';
import Users from '../pages/users';
import UserUpdate from '../pages/userUpdate';
import Vendors from '../pages/vendor';

const openRoutes = [
  { path: '/', exact: true, component: Login },
  { path: '*', exact: true, component: Login },
];

const protectedRoutes = [
  //side bars
  { path: '/dashboard', exact: true, component: Dashboard },
  { path: '/users', exact: true, component: Users },
  { path: '/cards', exact: true, component: Cards },
  { path: '/vendors', exact: true, component: Vendors },
  { path: '/package', exact: true, component: Package },
  { path: '/products', exact: true, component: Products },
  { path: '/add-products', exact: true, component: AddProduct },
  //inside user page
  { path: '/users/user-details/:id', exact: true, component:  UserDetails},
  { path: '/users/add-cards/:id', exact: true, component:  CardPage},
  // { path: '/users/user-card/:id', exact: true, component:  UserDetails},
  // { path: '/get-invoice/:id', exact: true, component:  GetInvoice},
  { path: '/users/get-invoice/:id', exact: true, component:  Invioce},
  { path: '/users/user-edit/:id', exact: true, component:  UserUpdate},
  //inside add product
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
