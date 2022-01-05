import React from 'react';
import { Link } from 'react-router-dom';
import './Collected.css'
const Colleted = ({product}) => {
    const {name,img,_id}=product
    return (
        <div className="service">
            <img className='w-100' src={img} alt="" />
            <h5 className='p-2'>{name}</h5>
            <Link to={`/detail/${_id}`}>
              <button className="btn btn-warning mb-2  p-2">Shop The Collection</button>
             </Link>
            
        </div>
    );
};

export default Colleted;