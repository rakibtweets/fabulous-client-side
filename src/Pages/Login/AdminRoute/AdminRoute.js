import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  const location = useLocation();
  if (!admin) {
    return (
      <h4 className="mx-auto fw-bold text-center p-3 text-danger">
        Loading...
      </h4>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
