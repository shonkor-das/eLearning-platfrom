import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

import Loading from '../shared/loading/Loading';

const RequireAuth = ({ children }) => {

  let { user, loading } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) 
    return <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
  else
  return children;

};

export default RequireAuth;
