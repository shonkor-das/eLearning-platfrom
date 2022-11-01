import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

import Loading from '../shared/loading/Loading';

const UserAuth = ({ children }) => {

  let { user, loading } = useContext(AuthContext);
  let location = useLocation();
  console.log(location.pathname)

  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    return <Navigate to='/home' state={{ from: location }} replace></Navigate>
  }
  return children;

};

export default UserAuth;