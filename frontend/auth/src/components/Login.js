import React, { useContext } from 'react'
import AuthContext from '../context/AuthContect';


const Login = () => {

    let { loginUser } = useContext(AuthContext)

    return(
        <form className='login-form' onSubmit={loginUser} ><br />
            <input type="text" name="username" placeholder="enter username" required/><br />
            <input type="password" name="password" placeholder="enter password" required /><br />
            <button type="submit">submit</button>
        </form>
    )


}

export default Login;