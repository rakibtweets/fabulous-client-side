import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Container>
        <Card className="p-5 w-50 mx-auto">
          <h3 className="fw-bold mb-3">Create Account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control rounded-pill"
              placeholder="Name"
              type="name"
              {...register('name', { required: true })}
            />
            <br />
            <input
              className="form-control rounded-pill"
              placeholder="Email"
              type="email"
              {...register('email', { required: true })}
            />
            <br />

            <input
              className="form-control rounded-pill"
              placeholder="Password"
              type="password"
              {...register('password', { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
            <br />
            <input
              className="form-control rounded-pill"
              placeholder="Confirm Password"
              type="password"
              {...register('confirmPassword', { required: true })}
            />
            <br />

            <button
              className="btn login__btn text-uppercase rounded-pill w-100"
              type="submit"
            >
              Sign In
            </button>
            <br />
            <br />

            <Link className="text-decoration-none text-secondary" to="/login">
              All ready have account ?
            </Link>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Register;
