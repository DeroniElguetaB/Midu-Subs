import { useState } from "react"
import Sub from "../types"

interface FormState {
    inputValue: Sub
}
interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}

const Form = ({onNewSub}: FormProps) => {
    const [inputValue, setInputValue] = useState<FormState['inputValue']>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(subs => ([...subs, inputValue]))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputValue.nick} name="nick" placeholder="nick" />
                <input type="number" onChange={handleChange} value={inputValue.subMonths} name="subMonths" placeholder="subMonths" />
                <input type="text" onChange={handleChange} value={inputValue.avatar} name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValue.description} name="description" placeholder="description" />

                <button>Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form