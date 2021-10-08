import useInput from "../../hooks/use-input"
import { InputWrapper } from "./CheckOutForm.styles"
import Input from "../UI/Input/Input"
import { useContext } from "react"
import CartContext from "../../store/cart-context"

const isNotEmpty = value => value.trim() !== ''

const CheckOutForm = (props) => {
    const cartCtx = useContext(CartContext)

    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isNotEmpty)

    const {
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress
    } = useInput(isNotEmpty)

    let formIsValid = false

    if(nameIsValid && addressIsValid) {
        formIsValid = true
    }

    const submitHandler = event => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        console.log('Submitted')
        console.log(nameValue, addressValue, cartCtx.items)

        resetName()
        resetAddress()
    }

    return (
        <form onSubmit={submitHandler}>
            <InputWrapper>
                <Input
                    label='Name'
                    input={{
                        id: 'name',
                        type: 'text',
                        onChange: nameChangeHandler,
                        onBlur: nameBlurHandler,
                        value: nameValue
                    }}
                />
                {nameHasError && <p>Name must not be empty</p>}
                <Input
                    label='Address'
                    input={{
                        id: 'address',
                        type: 'text',
                        onChange: addressChangeHandler,
                        onBlur: addressBlurHandler,
                        value: addressValue
                    }}
                />
                {addressHasError && <p>Address must not be empty</p>}
                <button disabled={!formIsValid}>Submit</button>
            </InputWrapper>
        </form>
    )
}

export default CheckOutForm