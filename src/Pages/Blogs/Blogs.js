import React from 'react';
import './Blogs.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <Navigation />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/1_279976eb-dfb2-49ae-bb38-fddb034e4871_720x.png?v=1610014539" />
                            <Card.Body>
                                <Card.Title>Upon of seasons earth dominion</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/2_5ab0bbcb-d013-4089-92cc-50bbb6215594_360x.png?v=1610014531" />
                            <Card.Body>
                                <Card.Title>Nostro expetenda voluptatum</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/3_ffc21d60-6b46-4b88-9175-3d925d36eb9d_360x.png?v=1610014521" />
                            <Card.Body>
                                <Card.Title>Very darkness seasons on earth</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/4_1cc31f1e-5328-45a5-ad53-7c33eb919493_360x.png?v=1610014476" />
                            <Card.Body>
                                <Card.Title>Scelerisque vestibulum urna</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/5_6a55dc98-e9dd-4371-9a96-ee4d64b37164_360x.png?v=1610014464" />
                            <Card.Body>
                                <Card.Title>Nec intellegat deseruisse te</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0301/7274/1770/articles/6_5400634a-fc88-442e-9ba0-988995221b1a_360x.png?v=1610014410" />
                            <Card.Body>
                                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className='blog'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Blogs;