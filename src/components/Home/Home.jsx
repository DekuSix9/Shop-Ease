import React from 'react';
import Banner from '../Banner/Banner';
import AllproductSection from '../AllProductSection/AllproductSection';
import Features from '../FeaturesProduct/Features';
import AddSection from '../Addsection/AddSection';
import Subscriber from '../Subcriber/Subscriber';
import OurProduct from '../OurProduct/OurProduct';
import { Outlet } from 'react-router-dom';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllproductSection></AllproductSection>
          <Features></Features>
         <AddSection></AddSection>
         <OurProduct></OurProduct>
         <Outlet></Outlet>
         <Subscriber></Subscriber>
         
        </div>
    );
};

export default Home;