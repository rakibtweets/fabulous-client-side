import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer>
        <Container className="footer g-5 my-5">
          <Row>
            <Col md={3} sm={6}>
              <h3>Contact </h3>
              <p>Location: 3005 Fabulous cosmetic center, USA</p>
              <p>Contact Us: 983455625</p>
              <p>Email: fabulouscosmetic@yahoo.com</p>
            </Col>
            <Col md={3} sm={6}>
              <h3>Your Account</h3>
              <p>Personal Info</p>
              <p>Orders</p>
              <p>Credit slips</p>
              <p>Addresses</p>
              <p>My Wishlist</p>
            </Col>
            <Col md={3} sm={6}>
              <h3>Our Company</h3>
              <p>Legal Notice</p>
              <p>Secure Payment</p>
              <p>Contact Us</p>
              <p>Sitemap</p>
              <p>My account</p>
            </Col>
            <Col md={3} sm={6}>
              <h3>Product</h3>
              <p>Delivery</p>
              <p>Price Drop</p>
              <p>New Product</p>
              <p>Best Product</p>
              <p>Stores</p>
            </Col>
          </Row>
        </Container>
        <div
          style={{ backgroundColor: 'darksalmon', marginTop: '10px' }}
          className="text-center text-white p-3"
        >
          Copyright@sumaiamannan2013@gmail.com
        </div>
      </footer>
    </div>
  );
};

export default Footer;
