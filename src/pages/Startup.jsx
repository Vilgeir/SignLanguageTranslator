import {Link} from "react-router-dom"
import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Startup = () => {

    const { user, setUser } = useState("");

    const handleLogin = () => {
        
    }

    return (
        <>
            <h1>Startup</h1>
            <LoginForm/>
            
        </>
    )
}

export default Startup