import React from 'react';
import './Products.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} sm={12}>
          <img
            className="w-70%"
            src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448"
            alt=""
          />
        </Col>
        <Col md={6} sm={12}>
          <div>
            <h4>THE PRODUCTS</h4>
            <h2 className="title-left">All About Fabulous</h2>
            <p className="m-5">
              Halsey is the latest celebrity to launch her own beauty brand:
              About Face. Her products are both playful and electrifying, but
              are they worth every penny? E! News has the scoop!
            </p>
            <div className="row mx-5">
              <div className="col-md-6">
                <ul>
                  <li>Eye and facial makeup</li>
                  <li>Hair Serum</li>
                  <li>Makeup Brush</li>
                  <li>Professional Powder</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Lipstick & Nail Art</li>
                  <li>Skincare Cream</li>
                  <li>Hair Shampoo</li>
                  <li>facial Kit</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className=" d-flex justify-content-center">
        <div className="">
          <Link to="/collections">
            <button className="btn px-5 rounded-pill">View More</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Products;
