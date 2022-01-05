import React, { useEffect, useState } from 'react';
import Colleted from '../Collected/Colleted';
import './Collection.css';
import { Spinner } from 'react-bootstrap';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://morning-brook-90186.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [isLoading]);
  return (
    <div className="container text-center">
      <h3 className="py-4 fw-bold text-center">Products Collection</h3>
      {isLoading ? (
        <Spinner
          className="container-fluid text-center"
          animation="border"
          variant="danger"
          size="6em"
        />
      ) : (
        <div className="product-container">
          {products.map((product) => (
            <Colleted key={product._id} product={product}></Colleted>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
