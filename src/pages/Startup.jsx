import {Link} from "react-router-dom"
import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Startup = () => {

    const { user, setUser } = useState("");

    const handleLogin = () => {
        
    }

    console.log(process.env.REACT_APP_API_KEY)

    return (
        <>
            <h1>Startup</h1>
            <LoginForm/>
            
        </>
    )
}

export default Startup