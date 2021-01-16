import React from "react";
import { Cta } from "../../atoms";
import { Header, Info, Product, ProductDesktop } from "../../components";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Info />
      <Product />
      <ProductDesktop />
      <Cta />
    </div>
  );
};

export default Homepage;
