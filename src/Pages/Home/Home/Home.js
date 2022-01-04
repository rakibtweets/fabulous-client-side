import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer';
import Announcement from '../Announcement';
import AwesomeFeatures from '../AwesomeFeatures';
import ContactForm from '../ContactForm';
import LatestProducts from '../LatestProducts';
import Products from '../Products';
import Services from '../Services';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Slider />
      <AwesomeFeatures />

      <LatestProducts />
      <Products />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
