import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
const FormArea = () => {
  return (
    <div className="mt-3 pl-3 col-lg-4 col-md-10 col-sm-10 mx-auto ">
      <div className="py-2">
        <h2>Online Shoe Shop</h2>
        <p className="lead">
          Sorry we have only brown men shoes left in stock but trying to bring
          more products soon...
        </p>
      </div>
      <Form className="mx-auto">
        <Form.Label className="my-3 mx-auto">Search for keywords</Form.Label>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="w-75 mr-2" />
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="my-3">Categories</Form.Label>
          <Form.Control
            className="w-75"
            as="select"
            type="text"
            placeholder="select"
          >
            <option>Select</option>
            <option>Women</option>
            <option>Men</option>
            <option>Boys</option>
            <option>Girls</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormArea;
