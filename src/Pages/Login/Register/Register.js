import React from 'react';
import './Register.css';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signWithGoogle, registerNewUser, isLoading } = useAuth();
  const handleGoogleSignIn = () => {
    signWithGoogle(location, navigate);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      swal('Error!', 'Password does not match', 'warning');
      return;
    }
    registerNewUser(name, email, password, navigate);
    reset();
  };
  return (
    <>
      <Container>
        <Card className="p-5 w-50 mx-auto mt-5">
          <h3 className="fw-bold text-center mb-3">Create Account</h3>

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
                Create Account
              </button>
              <br />
              <br />

              <Link
                className="text-decoration-none text-center text-secondary"
                to="/login"
              >
                All ready have account ?
              </Link>
            </form>
          )}

          <div>
            <h3 className="fw-bold text-center text-secondary mx-auto my-3">
              OR
            </h3>
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

export default Register;
