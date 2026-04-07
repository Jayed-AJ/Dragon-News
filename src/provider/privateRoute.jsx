import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import LoadingPage from '../pages/LoadingPage';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading) {
        return <LoadingPage></LoadingPage>
    }
    
    if(user) {
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate> 
};

export default PrivateRoute;