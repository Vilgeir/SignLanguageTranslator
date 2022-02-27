import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser, userLogin } from "../api/user";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const usernameConfig = {
    required: true,
    minLength: 3,
};

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user, setUser } = useUser(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        if (user !== null) {
            navigate("profile");
        }
        console.log("User has changed", user);
    }, [user, navigate]);

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        if (userResponse !== null) {
            storageSave("translation-user", userResponse);
            setUser(userResponse);
        }
        console.log("error: " + error);
        console.log("user: " + userResponse);
        setLoading(false);
    };

    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "required") {
            return <span>Username is required</span>;
        }
        if (errors.username.type === "minLength") {
            return <span>Username to short (min. 3)</span>;
        }
    })();

    console.log(errors);
    return (
        <>
            <h2>LoginForm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Login: </legend>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        {...register("username", usernameConfig)}
                    />
                    <button type="submit" disabled={loading}>
                        Continue
                    </button>
                    {errorMessage}
                    {loading && <p>Loading...</p>}
                    {apiError}
                </fieldset>
            </form>
        </>
    );
};
export default LoginForm;
