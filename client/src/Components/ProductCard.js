import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";
import black_shoe from "../images/blackshoe.png";
import girls from "../images/girls.PNG";
import boys from "../images/boys.PNG";

const ProductCard = ({ setImgSrc }) => {
  const imgSrcs = [brown_shoe, black_shoe, girls, boys];
  const [prods, setProds] = useState();

  useEffect(() => {
    fetch("/mock-products")
      .then((res) => res.json())
      .then((res) => {
        setProds(res);
      });
  }, []);

  const handleClick = (e) => {
    setImgSrc(e.target.value);
  };

  return prods !== undefined
    ? prods.products.map((product, index) => (
        <div
          key={product.id}
          className="col-lg-3 col-md-6 col-sm-10 my-3  mx-auto d-flex"
        >
          <Card>
            <Card.Img variant="top" className="card-img" src={imgSrcs[index]} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.text}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>{product.price}</ListGroup.Item>
              </ListGroup>
              <Link to={product.availability ? "/details" : "/out-of-stock"}>
                {product.availability ? (
                  <Button variant="dark">See Details</Button>
                ) : (
                  <button
                    className="btn btn-sm text-danger mb-3"
                    onClick={handleClick}
                    value={product.id}
                  >
                    Out of stock
                  </button>
                )}
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))
    : "loading";
};

export default ProductCard;
