import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch('https://morning-brook-90186.herokuapp.com/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (data.insertedId) {
          swal('Product Added', '', 'success');
          reset();
        }
      });
  };

  return (
    <div className="container mb-5 mt-5 col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 ">
      <h2>Submit Products Details</h2>
      <form className="ms-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 mb-2 w-75"
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Product Name"
        />
        <textarea
          className="p-2 mb-2 w-75"
          {...register('category')}
          placeholder="Category"
        />
        <textarea
          className="p-2 mb-2 w-75"
          {...register('description')}
          placeholder="Product Details"
        />
        <input
          className="p-2 mb-2 w-75"
          type="number"
          {...register('price')}
          placeholder="Price"
        />
        <input
          className="p-2 mb-2 w-75"
          {...register('img')}
          placeholder="Product Image url"
        />
        <input className="p-2 mb-2 w-75" type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
