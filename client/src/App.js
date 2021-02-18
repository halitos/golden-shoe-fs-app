import React, { useState, useEffect } from "react";
import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Footer from "./Components/Footer";
import NavbarBrand from "./Components/NavbarBrand";
import FormArea from "./Components/FormArea";
import ProductCardsDisplay from "./Components/ProductCardsDisplay";
import SingleProductDetail from "./Components/SingleProductDetail";
import { Route, Switch } from "react-router-dom";
import AmountContext from "./Components/Context";
import OutOfStockPage from "./Components/OutOfStockPage";

function App() {
  const [imgSrc, setImgSrc] = useState();
  const [amount, setAmount] = useState();
  const [count, setCount] = useState(0);
  const value = { amount, setAmount, count, setCount };

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => {
        setAmount(res[0].quantity);
      });
  });

  return (
    <>
      <AmountContext.Provider value={value}>
        <NavbarBrand />
        <Switch>
          <Route exact path="/">
            <div className="main row ml-3">
              <FormArea />
              <CarouselBox />
            </div>
            <ProductCardsDisplay setImgSrc={setImgSrc} />
          </Route>
          <Route path="/details">
            <SingleProductDetail />
          </Route>
          <Route path="/out-of-stock">
            <OutOfStockPage imgSrc={imgSrc} />
          </Route>
        </Switch>
        <Footer />
      </AmountContext.Provider>
    </>
  );
}

export default App;
