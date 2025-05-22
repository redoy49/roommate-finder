import React from "react";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import { useLoaderData } from "react-router";
import FeatureLists from "../components/FeatureCards";
import Benifits from "../components/Benifits";

const Home = () => {
  const lists = useLoaderData();
  console.log(lists);

  return (
    <>
      <Slider></Slider>
      <FeatureLists lists={lists}></FeatureLists>
      <Benifits></Benifits>
      <FAQ></FAQ>
    </>
  );
};

export default Home;
