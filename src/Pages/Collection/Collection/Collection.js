import React, { useEffect, useState } from 'react';
import Colleted from '../Collected/Colleted';
import './Collection.css'
const Collection = () => {
    const [products, setProducts] =useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container text-center'>
            <h3>Collection</h3>
            <div className="product-container">
             {
             products.map(product=><Colleted
             key={product._id}
             product={product}
             ></Colleted>)   
            }
            </div>
        </div>
    );
};

export default Collection;