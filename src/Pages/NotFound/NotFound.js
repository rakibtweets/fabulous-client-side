import React from 'react';
import './NotFound.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container className='image'>

                <div className='notfound'>
                    <img src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" alt=""



                    />
                    <br />
                    <Link className='btn' to="/">GO Back</Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;