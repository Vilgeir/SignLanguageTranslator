import {Link} from "react-router-dom"
import { useState } from "react";

const Translation = () => {

    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <h2>translation</h2>
            <Link to="/profile">
                <button> --> Profile</button>
            </Link>
            <input  type="text" placeholder="Enter name to login" onChange={handleInput}></input>
            <h3>{input}</h3>
        </>
    )
}

export default Translation