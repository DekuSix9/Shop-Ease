import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import AllProducts from './components/AllProducts/AllProducts';
import Mobiles from './components/Mobiles/Mobiles';
import PC from './components/PC/PC';
import HeadPhones from './components/Headphones/HeadPhones';
import SmartWatches from './components/SmartWatches/SmartWatches';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            index: true,  
            element: <AllProducts />
          },
          {
            path: 'mobiles', 
            element: <Mobiles />
          },
          {
            path:'laptops',
            element:<PC></PC>
          },
          {
            path:'headphones',
            element:<HeadPhones></HeadPhones>
          },
          {
            path:'smartwatches',
            element:<SmartWatches></SmartWatches>
          }
        ]
      }
    ]
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
