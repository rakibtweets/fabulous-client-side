import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Aboutus = () => {
    return (
        <div>
            <NavBar />
            <div className='container text-center m-5'>
                <h2 className='title-left'>About Us</h2>
            </div>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img src="https://templates.envytheme.com/taro/default/assets/img/export/skill.png" alt="" />
                    </Col>
                    <Col md={6} sm={12}>
                        <h1>The Innovation Of Modern Style is Easy To Touch</h1>
                        <p>First things first, HD makeup was innovated to make skin look perfect on screen. Hence, as a bride, HD Makeup can be a great choice as you are under the constant glare of the cameras. Airbrush makeup is mostly suggested for oily skin whereas HD Makeup is suitable for all skin types.</p>
                        <button className='btn'>Learn More</button>
                    </Col>
                </Row>
            </Container>

            <div className='form mt-5'>
                <Container>
                    <Row>
                        <Col md={2} sm={12}>
                            <img src="https://templates.envytheme.com/taro/default/assets/img/ride/subscribe1.png" alt="" />
                        </Col>
                        <Col md={7} sm={12}>
                            <h1 className='text-center mt-2'>Do You Want To Get Update <br /> What’s Upcoming?</h1>
                            <form className='mt-3' action="https://formsubmit.co/sumaiamannan2013@gmail.com" method="POST">
                                <input style={{ margin: "4px", width: "100%" }} placeholder="Enter your name" type="text" name="name" required />
                                <input style={{ margin: "4px", width: "100%" }} placeholder="Enter your email" type="email" name="email" required />

                                <button className='text-center btn btn-center' style={{ margin: "4px", width: "50%" }} type="submit">Subscribe</button>
                            </form>
                        </Col>
                        <Col md={3} sm={12}>
                            <img src="https://templates.envytheme.com/taro/default/assets/img/ride/subscribe2.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Aboutus;