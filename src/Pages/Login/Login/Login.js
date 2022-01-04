import React from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signWithGoogle, loginUser, isLoading } = useAuth();
  const handleGoogleSignIn = () => {
    signWithGoogle(location, navigate);
  };
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
          {isLoading ? (
            <Spinner
              className="container-fluid text-center"
              animation="border"
              variant="danger"
              size="6em"
            />
          ) : (
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
          )}
          <div>
            <h3 className="fw-bold text-secondary mx-auto my-3">OR</h3>
            <button
              onClick={handleGoogleSignIn}
              className="btn google-btn py-2 w-100 rounded-pill"
            >
              <FcGoogle className="fs-3 me-2" /> Sign In With Google
            </button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Login;
