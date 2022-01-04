import React from 'react';
import './Slider.css'

import { Carousel, Container, } from 'react-bootstrap';






const Slider = () => {



    return (
        <Container style={{ height: "100vh" }} >
            <div className="mt-5">
                <div className="row mt-6">
                    <div className="col-md-6 col-12 mt-6">
                        <p className='slider-left'>Beauty</p>
                        <h1>Super Natural</h1>
                        <p>Beauty is commonly described as a feature of objects that makes these objects pleasurable to perceive. Such objects include landscapes, sunsets, humans and works of art. Beauty, together with art and taste, is the main subject of aesthetics, one of the major branches of philosophy.</p>
                        <button className='text-center btn btn-center'>Shop Now</button>
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                        <Carousel>
                            <Carousel.Item>
                                <img style={{ height: "70vh" }}
                                    className="d-block w-100  "
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/countdownbanner.png?v=1610090122 " alt="First-Slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: "70vh" }}
                                    className="d-block w-100"
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/aboutus-2.png?v=1610092477" alt="Second-slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: "70vh" }}
                                    className="d-block w-100"
                                    src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Untitled-1.png?v=1610109448
                            " alt="Third-slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Slider;