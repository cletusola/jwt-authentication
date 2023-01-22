import { createContext, useState } from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    // Login Authentication Function 
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null)
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault()
        console.log("it's working")

        await axios ({
            url:'http://127.0.0.1:8000/api/token/',
            method: 'POST',
            data: {
                username: e.target.username.value, password:e.target.password.value
            },
            headers:{
                'Content-Type':'Application/Json'
            }
        }).then((response) => {
            console.log(response.data)
            setAuthTokens(response.data)
            setUser(jwt_decode(response.data.access))
            localStorage.setItem('authTokens', JSON.stringify(response.data))
            navigate('/')
        }).catch((err) => console.log(err))

    }
    
    // logout function 
    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens') 
        navigate('/login')       
    }

    //context data 
    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


