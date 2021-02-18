import React from "react";
import ProductCard from "./ProductCard";
const products = require("../../src/products");

function ProductCardsDisplay({ setImgSrc }) {
  return (
    <div className="row m-3">
      <ProductCard products={products} setImgSrc={setImgSrc} />
    </div>
  );
}

export default ProductCardsDisplay;
