import React from 'react';
import Slider from '../components/Slider';
import FAQ from '../components/FAQ';
import { useLoaderData } from 'react-router';

const Home = () => {
  const lists = useLoaderData()
  console.log(lists);

  return (
    <>
      <Slider></Slider>
      <FAQ></FAQ>
    </>
  );
};

export default Home;