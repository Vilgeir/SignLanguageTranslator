import {useForm} from "react-hook-form"

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    
    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
        <h2>LoginForm</h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <legend>Login: </legend>
                <label htmlFor="username">Username: </label>
                <input type="text" { ...register("username", usernameConfig) }/>
            </fieldset>
        </form>
        </>
    )
}
export default LoginForm