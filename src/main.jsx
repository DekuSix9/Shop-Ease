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
          },
          {
            path:'/mobiles/:id',
            element:<Mobiles></Mobiles>,
            loader:async()=>{
              const res=await fetch('/Mobiles.json')
              return res.json()
            }
          },
          {
            path:'/laptops/:id',
            element:<PC></PC>,
            loader:async()=>{
              const res=await fetch('/pc&laptops.json')
              return res.json()
            }
          },
          {
            path:'/headphones/:id',
            element:<HeadPhones></HeadPhones>,
            loader:async()=>{
              const res=await fetch('/headphones.json')
              return res.json()
            }
          },
          {
            path:'/smartwatches/:id',
            element:<SmartWatches></SmartWatches>,
            loader:async()=>{
              const res=await fetch('/smartwatches.json')
              return res.json()
            }
          },

          {
            path:'/all/:id',
            element:<AllProducts></AllProducts>,
            loader:async()=>{
              const res=await fetch('/allproducts.json')
              return res.json()
            }
          },




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
