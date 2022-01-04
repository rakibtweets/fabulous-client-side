import React from 'react';
import './AwesomeFeatures.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AwesomeFeatures = () => {
  return (
    <Container>
      <div className="text-center m-5">
        <p className="trend">THE Products</p>
        <h2 className="title-left">Awesome Features</h2>
      </div>
      <Row xs={1} lg={2} className="g-2">
        <Col md={6} xs={12}>
          <img
            style={{ width: '100%' }}
            src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/featuresbannerimage.png?v=1610091508"
            alt=""
          />
        </Col>
        <Col md={6} xs={12}>
          <Row xs={1} lg={2} className="g-2">
            <Col>
              <Card>
                <Card.Img
                  className="awesome"
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/features1_8166e743-7265-4324-9f4f-e251160c35e8.png?v=1610091055"
                />
                <Card.Body>
                  <Card.Title className="title">Highlighter Makeup</Card.Title>
                  <Card.Text>
                    Discover our best long-lasting eyeliners by Maybelline. From
                    gel to liquid to pencil, you can create perfect eye makeup
                    looks with a waterproof Maybelline
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  className="awesome"
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/features3_6aaa869d-4e78-429f-8c03-9a214ac27389.png?v=1610091114"
                />
                <Card.Body>
                  <Card.Title className="title">Glossy Makeup</Card.Title>
                  <Card.Text>
                    Shop the Dior Official Site & Enjoy Complimentary Samples
                    and Shipping with Any Order. Dior Lip Glow is Essential for
                    Radiantly Enhanced Lips with Universal .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  className="awesome"
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/features2_ddb9472a-158e-4d97-83ae-d01a7ffc946b.png?v=1610091092"
                />
                <Card.Body>
                  <Card.Title className="title">Matte Makeup</Card.Title>
                  <Card.Text>
                    DHC's Super Collagen Mist is a collagen infused mist to
                    hydrate after cleansing, set your makeup, or refresh
                    hydration throughout the day. Benefits.Hydrate,
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  className="awesome"
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/features4_4dcf7ff9-9550-4010-b2b5-686af572fd11.png?v=1610091149"
                />
                <Card.Body>
                  <Card.Title className="title">Semi Makeup</Card.Title>
                  <Card.Text>
                    Shop the Dior Official Site & Enjoy Complimentary Samples
                    and Shipping with Any Order. Dior Lip Glow is Essential for
                    Radiantly Enhanced Lips with Universal .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AwesomeFeatures;
