import { useForm } from "react-hook-form"
import { useState } from "react"

const TranslationForm = ( {onTranslate} ) => {

    const [input, setInput] = useState("");

    const { register, handleSubmit} = useForm()

    const onSubmit = ({translation}) => {
        onTranslate(translation)
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit)}>
            <fieldset>
                <label>Translate:</label>
                <input  type="text" { ...register("translation")} placeholder="translate" onChange={handleInput}/>
                <p>{input}</p>
            </fieldset>
            <button type="submit">translation</button>
        </form>
    )
}

export default TranslationForm