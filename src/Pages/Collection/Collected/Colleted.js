import React from 'react';
import { Link } from 'react-router-dom';
import './Collected.css';
const Colleted = ({ product }) => {
  const { name, img, _id, price } = product;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h5 className="py-3">{name}</h5>
      <h6 className=" fw-bold"> $ {price}</h6>
      <Link to={`/productDetails/${_id}`}>
        <button className="btn btn-warning mb-2  p-2 px-3">Details</button>
      </Link>
    </div>
  );
};

export default Colleted;
