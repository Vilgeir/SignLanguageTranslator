import { useForm } from "react-hook-form"
import { useState } from "react"
import { signs } from "../utils/imgObject"
import "../pages/translation.css"

const TranslationForm = ( {onTranslate} ) => {

    const [input, setInput] = useState([]);

    const { register, handleSubmit} = useForm()

    const onSubmit = ({translation}) => {
        onTranslate(translation)
    }
 
    //listens to input value and displays sign language characters
    const handleInput = (event) => {
        if (event.target.value) {
            let imgTags = []
            let translation = event.target.value.split("")
            //maps through every letter of the input value
            translation.map((char, index) => {
                signs.map(sign => {   
                    //matches sign images with each letter
                    if (sign.char === char) {
                        imgTags.push(<img className="sign-img" key={index} src={sign.img}></img>)
                    }
                })
            })
            setInput(imgTags)
        } else {
            setInput([])
        }
    }
    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <div>
                    <input id="translation-input" type="text" { ...register("translation")} placeholder="translate" onChange={handleInput}/>
                    <button id="translation-button" type="submit">Save Translation</button>
                </div>
            </form>
            <div id="translation-box">
                {input.map(tag => tag)}
            </div>
            
        </>
        
    )
}

export default TranslationForm