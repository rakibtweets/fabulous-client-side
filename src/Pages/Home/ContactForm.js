import React from 'react';
import './ContactForm.css'
import { Col, Container, Row } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div className='form'>
            <Container className='p-3 mt-5 form'>
                <Row>
                    <Col md={6} sm={12}>
                        <p className='slider-left' >THE PRODUCTS</p>
                        <h1 className='title-left'>What is the fabulous?</h1>
                        <p className='mt-4'>Discover our best long-lasting eyeliners by Maybelline. From gel to liquid to pencil, you can create perfect eye makeup looks with a waterproof Maybelline ...</p>
                        <button className='text-center btn btn-center'>Shop Now</button>
                    </Col>
                    <Col md={6} sm={12} className='mt-4'>
                        <form action="https://formsubmit.co/sumaiamannan2013@gmail.com" method="POST">
                            <input style={{ margin: "4px", width: "100%" }} placeholder="Enter your name" type="text" name="name" required />
                            <input style={{ margin: "4px", width: "100%" }} placeholder="Enter your email" type="email" name="email" required />
                            <textarea style={{ margin: "4px", width: "100%" }} placeholder="Message" name="message" cols="30"
                                rows="5"></textarea>
                            <button className='text-center btn btn-center' style={{ margin: "4px", width: "50%" }} type="submit">Send</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;