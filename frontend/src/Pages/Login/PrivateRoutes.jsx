import { useContext } from 'react';
import { AccountContext } from '../../components/AccountContext';

const { Outlet, Navigate } = require('react-router') ;

// Gathers our user object for the session
const useAuth = () => {
    const {user} = useContext(AccountContext) ;
    return user && user.loggedIn && user.firstname && user.lastname ;
}

// Makes the home protected by unlogged users
const PrivateRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/"/> ;
}

export default PrivateRoutes ;