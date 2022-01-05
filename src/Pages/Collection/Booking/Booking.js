import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://morning-brook-90186.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = 'Pending';
    data.watch = product;
    console.log(data);
    fetch(
      `https://morning-brook-90186.herokuapp.com/myBuyingList/${user?.email}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Congratulations!', 'You Order Successfully', 'success');
          reset();
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center text-info fw-bold my-3">Order Watch</h2>
      <Container>
        <Row>
          <Col lg={6} className="destination-info">
            <div className="destination-img ">
              <img className="img-fluid" src={product?.img} alt="" />
            </div>
            <div className="destination-info mt-4">
              <h5 className="text-success fw-bold">{product?.name}</h5>

              <p className=" fw-bold h6">Price: $ {product?.price}</p>
              <div className="shor-description text-secondary small">
                <p>{product?.description}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-form">
            {user.email && (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4">
                <h4 className=" text-center fw-bold my-3">Order Form</h4>
                <input
                  className=" form-control"
                  defaultValue={user?.displayName}
                  {...register('buyerName')}
                />
                <br />
                <input
                  type="text"
                  className=" form-control"
                  defaultValue={user?.email}
                  {...register('email')}
                />
                <br />

                <input
                  type="text"
                  className=" form-control"
                  placeholder="Your Address"
                  {...register('address', { required: true })}
                />
                <br />
                {errors.address && (
                  <span className="text-danger">Address is required</span>
                )}
                <input
                  type="number"
                  className=" form-control"
                  placeholder="Phone No."
                  {...register('phone', { required: true })}
                />
                <br />
                {errors.phone && (
                  <span className="text-danger">Phone No is required</span>
                )}
                <input
                  type="date"
                  className=" form-control"
                  {...register('bookingDate', { required: true })}
                />

                <br />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
