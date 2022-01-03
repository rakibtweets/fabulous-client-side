import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors.exampleRequired && <span>This field is required</span>}
            <br />

            <button
              className="btn login__btn text-uppercase rounded-pill w-100"
              type="submit"
            >
              Sign In
            </button>
            <br />
            <br />

            <Link className="text-decoration-none text-black" to="/signup">
              Create Account
            </Link>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Login;
