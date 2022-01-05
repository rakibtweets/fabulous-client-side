import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LatestProducts.css';

const LatestProducts = () => {
  return (
    <Container className="mt-5 mb-5 ">
      <div className="banner mt-5px">
        <div className="container text-center m-5">
          <div>
            <h2
              style={{ color: '#E38EA5' }}
              className="trend text-center fw-bold "
            >
              The Latest
            </h2>
            <h2 className="title-left fw-bold">Fabolous Products</h2>
          </div>
        </div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic3_c2f965a7-7057-45ac-8b1b-804bd10adfca_720x.png?v=1610003571"
              />
              <Card.Body>
                <Card.Title className="title">Pencil Eyeliner</Card.Title>
                <Card.Text>
                  Discover our best long-lasting eyeliners by Maybelline. From
                  gel to liquid to pencil, you can create perfect eye makeup
                  looks with a waterproof Maybelline ...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic2_37a36615-de25-4223-8f5c-7bb439541072_720x.png?v=1610003448"
              />
              <Card.Body>
                <Card.Title className="title">Dior Lip Glow</Card.Title>
                <Card.Text>
                  Shop the Dior Official Site & Enjoy Complimentary Samples and
                  Shipping with Any Order. Dior Lip Glow is Essential for
                  Radiantly Enhanced Lips with Universal .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0301/7274/1770/products/Cosmetic3_c2f965a7-7057-45ac-8b1b-804bd10adfca_720x.png?v=1610003571"
              />
              <Card.Body>
                <Card.Title className="title">Collagen Spray</Card.Title>
                <Card.Text>
                  DHC's Super Collagen Mist is a collagen infused mist to
                  hydrate after cleansing, set your makeup, or refresh hydration
                  throughout the day. Benefits.Hydrate,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="container text-center m-5">
          <Link to="/collections">
            <button className="btn text-center px-5 rounded-pill">
              View All
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default LatestProducts;
