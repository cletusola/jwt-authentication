import React,{ useContext }  from "react";
import { Navigate } from 'react-router-dom';
import AuthContext from "../context/AuthContect";

// creating private route
const PrivateRoute = ({children}) => {

    console.log("Private route working")

    let {user} = useContext(AuthContext)

    if (!user) {
        return <Navigate to='/login' />
    }

    return children; 


    // const auth = JSON.parse(localStorage.getItem('authTokens'));

    // return auth?.user ? children:  <Navigate to='/login' />;
    // return (
    //     <Route {...rest}>{!user ? <Navigate to='/login' />: children  }</Route>
    // )
} 
export default PrivateRoute;