import { useForm } from "react-hook-form"
import { useState } from "react"
import { signs } from "../utils/imgObject"

const sssigns = [
    {
        char: "a",
        img: "signs/a.png"
    },
    {
        char: "b",
        img: "signs/b.png"
    }
]

const TranslationForm = ( {onTranslate} ) => {

    const [input, setInput] = useState([]);

    const { register, handleSubmit} = useForm()

    const onSubmit = ({translation}) => {
        onTranslate(translation)
    }
 
    const handleInput = (event) => {
        if (event.target.value) {
            let imgTags = []
            let translation = event.target.value.split("")
            //console.log(translation)
            translation.map(char => {
                signs.map(x => {   
                    if (x.char === char) {
                        imgTags.push(<img src={x.img}></img>)
                    }
                })
            })
            setInput(imgTags)
        } else {
            setInput([])
        }
    }
    return (
        <form onSubmit={ handleSubmit(onSubmit)}>
            <fieldset>
                <input  type="text" { ...register("translation")} placeholder="translate" onChange={handleInput}/>
                <button type="submit">translation</button>
            </fieldset>
            {input.map(x => x)}
        </form>
    )
}

export default TranslationForm