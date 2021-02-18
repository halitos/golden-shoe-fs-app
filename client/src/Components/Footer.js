import React from "react";
import { Jumbotron } from "react-bootstrap";
import { FaGithub, FaRegQuestionCircle } from "react-icons/fa";

function Footer() {
  return (
    <Jumbotron fluid className="mt-4 mb-0 p-4 bg-light text-center rounded">
      <h5>
        Created by <b>AND Digital</b> &copy; 2021
      </h5>
      <p>Halit Oskan</p>
      <ul className="d-flex justify-content-around">
        <li>
          <FaGithub size={56} />
        </li>
        <li>
          <FaRegQuestionCircle size={56} />
        </li>
      </ul>
      <p>
        We're a tech company focused on accelerating digital delivery. We do
        that by building both better products AND stronger teams.
      </p>
      <p>
        <a href="https://and.digital/">AND Digital</a> We accelerate digital
        capabilities.
      </p>
    </Jumbotron>
  );
}

export default Footer;
