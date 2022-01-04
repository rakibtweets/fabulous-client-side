import React from 'react';
import { Container } from 'react-bootstrap';

const Announcement = () => {
    return (
        <div style={{ backgroundColor: "darksalmon" }}>
            <Container className='text-center text-white p-2'>
                Super Deal! Free Shipping on Orders Over $50
            </Container>
        </div>
    );
};

export default Announcement;