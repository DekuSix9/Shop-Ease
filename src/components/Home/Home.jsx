import React from 'react';
import Banner from '../Banner/Banner';
import AllproductSection from '../AllProductSection/AllproductSection';
import Features from '../FeaturesProduct/Features';
import AddSection from '../Addsection/AddSection';
import Subscriber from '../Subcriber/Subscriber';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllproductSection></AllproductSection>
          <Features></Features>
         <AddSection></AddSection>
         <Subscriber></Subscriber>
        </div>
    );
};

export default Home;