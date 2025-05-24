import React, { useEffect } from "react";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import { useLoaderData } from "react-router";
import FeatureLists from "../components/FeatureCards";
import Benifits from "../components/Benifits";
import App from "../App";

const Home = () => {
  const lists = useLoaderData();

  useEffect(() => {
      document.title = "Home";
    }, []);

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
