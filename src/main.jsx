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
import CartProvider from './components/CartContext/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { index: true, element: <AllProducts /> },
          { path: 'mobiles', element: <Mobiles /> },
          { path: 'laptops', element: <PC /> },
          { path: 'headphones', element: <HeadPhones /> },
          { path: 'smartwatches', element: <SmartWatches /> },

          // ✅ Dynamic product detail pages
          { path: 'mobiles/:id', element: <Mobiles />, loader: async () => (await fetch('/Mobiles.json')).json() },
          { path: 'laptops/:id', element: <PC />, loader: async () => (await fetch('/pc&laptops.json')).json() },
          { path: 'headphones/:id', element: <HeadPhones />, loader: async () => (await fetch('/headphones.json')).json() },
          { path: 'smartwatches/:id', element: <SmartWatches />, loader: async () => (await fetch('/smartwatches.json')).json() },
          { path: 'all/:id', element: <AllProducts />, loader: async () => (await fetch('/allproducts.json')).json() },
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
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
