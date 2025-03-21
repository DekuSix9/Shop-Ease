import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
    
  },
  {
    path:'/cart',
    element:<Cart></Cart>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
