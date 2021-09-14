import { useRef } from "react"
import Input from "../../../UI/Input/Input"

const MealItemForm = props => {
    const amountInputRef = useRef()
    
    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                label='Amount'
                input={{
                    ref: amountInputRef,
                    id: 'amount_' + props.id, 
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}                
            />
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm