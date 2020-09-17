import { useState } from "react"
//Este custom hook lee cajas de texto y las guarda en el state

export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)
    //state para limpiar el campo
    const reset = () => {
        setvalues(initialState)
    }

    const handleInputChange = ({target}) => {
        // console.log(target.name);
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset]
    
}