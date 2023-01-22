import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContect";


const Header = () => {
    let {user,logoutUser} = useContext(AuthContext)
    return(
        <div className="header-div">
            <Link to="/">Home</Link> 
            <span> | </span>
            {user ? (
                <Link onClick={logoutUser}>logout</Link>

            ): <Link to="/login/">Login</Link>}
            

            {user && <p>Hello {user.username}</p>}

        </div>
    )
}
export default Header;