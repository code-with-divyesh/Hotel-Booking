import React from "react";
import Hero from "../../Components/Hero/Hero";
import FeaturedDestination from "../../Components/FeaturedDestination/FeaturedDestination";
import ExclusiveOffers from "../../Components/ExclusiveOffers/ExclusiveOffers";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonials />
    </>
  );
};

export default Home;
