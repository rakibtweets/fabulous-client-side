import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signWithGoogle, loginUser, authError, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    loginUser(email, password, location, navigate);
  };
  return (
    <>
      <Container>
        <Card className="p-5 w-50 mx-auto mt-5">
          <h3 className="fw-bold mb-3">Login</h3>
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

            <Link
              className="text-decoration-none text-secondary"
              to="/register"
            >
              Create Account
            </Link>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Login;
