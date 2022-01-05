import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://morning-brook-90186.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <h2 className=" fw-bold text-success text-center my-3">
        product Details
      </h2>
      <Container>
        <Row xs={1} lg={2} className="g-4">
          <Col xs={12} lg={6}>
            <div className="">
              <img className=" img-fluid" src={product?.img} alt="" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="destination-info">
              <h4 className=" fw-bold"> {product?.name}</h4>

              <p className=" fw-bold">Price: ${product?.price}</p>
              <p className=" fw-bold">Category: {product?.category}</p>
              <div className="shor-description">
                <p>{product?.description}</p>
              </div>
            </div>
            <Link to={`/booking/${id}`}>
              <Button variant="outline-none">Buy Now </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
