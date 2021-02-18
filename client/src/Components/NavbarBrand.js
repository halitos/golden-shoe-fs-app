import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiSonicShoes } from "react-icons/gi";
import AmountContext from "./Context";

const NavbarBrand = () => {
  const { count } = useContext(AmountContext);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      <Navbar.Brand href="#home" className="d-flex pt-3 pb-1">
        <Link to="/">
          <div className="d-flex align-items-center flex-column">
            <GiSonicShoes className="logo" />
            Golden Shoe
          </div>
        </Link>{" "}
      </Navbar.Brand>
      <Navbar.Brand className="ml-5 ">
        <RiShoppingCartLine /> <span className="counter">{count}</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarBrand;
