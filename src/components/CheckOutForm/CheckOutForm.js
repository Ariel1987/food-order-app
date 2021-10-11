import useInput from "../../hooks/use-input"
import { CancelButton, InputWrapper, SubmitButton } from "./CheckOutForm.styles"
import Input from "../UI/Input/Input"
import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import useHttp from '../../hooks/use-http'

const isNotEmpty = value => value.trim() !== ''

const CheckOutForm = (props) => {
    const { isLoading, error, sendRequest: sendOrderRequest } = useHttp()

    const [isSubmitted, setIsSubmitted] = useState(false)

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
        value: streetValue,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreet
    } = useInput(isNotEmpty)

    const {
        value: postalValue,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler,
        reset: resetPostal
    } = useInput(isNotEmpty)

    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity
    } = useInput(isNotEmpty)

    let formIsValid = false

    if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
        formIsValid = true
    }

    const createOrder = (clientName, clientStreet, clientPostal, clientCity, orderText, orderData) => {
        const generatedId = orderData.name;
        const createdTask = {
            id: generatedId,
            user: {
                name: clientName,
                street: clientStreet,
                postal: clientPostal,
                city: clientCity,
            },
            order: orderText
        };

        submitHandler(createdTask);
    };


    const enterOrderHandler = async (clientName, clientStreet, clientPostal, clientCity, orderText) => {
        sendOrderRequest(
            {
                url: 'https://food-order-app-db98e-default-rtdb.firebaseio.com/orders.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    user: {
                        name: clientName,
                        street: clientStreet,
                        postal: clientPostal,
                        city: clientCity,
                    },
                    order: orderText
                }
            },
            createOrder.bind(null, clientName, clientStreet, clientPostal, clientCity, orderText)
        )
    }

    const submitHandler = event => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        enterOrderHandler(nameValue, streetValue, postalValue, cityValue, cartCtx.items)

        resetName()
        resetStreet()
        resetPostal()
        resetCity()
        cartCtx.clearCart()
        setIsSubmitted(true)
    }

    return (
        <form onSubmit={submitHandler}>
            {isSubmitted ? <h2>Your order is submited</h2> :
                <InputWrapper borderColor={formIsValid ? '' : '#aa0b20'}>
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
                    {nameHasError && <p>Please enter a valid name</p>}
                    <Input
                        label='Street'
                        input={{
                            id: 'street',
                            type: 'text',
                            onChange: streetChangeHandler,
                            onBlur: streetBlurHandler,
                            value: streetValue
                        }}
                    />
                    {streetHasError && <p>Please enter a valid street</p>}
                    <Input
                        label='Post Code'
                        input={{
                            id: 'postal',
                            type: 'text',
                            onChange: postalChangeHandler,
                            onBlur: postalBlurHandler,
                            value: postalValue
                        }}
                    />
                    {postalHasError && <p>Please enter a valid post code</p>}
                    <Input
                        label='City'
                        input={{
                            id: 'city',
                            type: 'text',
                            onChange: cityChangeHandler,
                            onBlur: cityBlurHandler,
                            value: cityValue
                        }}
                    />
                    {cityHasError && <p>Please enter a valid city</p>}
                    <section>
                        <CancelButton type='button' onClick={props.onCancel}>Cancel</CancelButton>
                        <SubmitButton>
                            <button disabled={!formIsValid}>{isLoading ? 'Submitting order...' : 'Submit'}</button>
                        </SubmitButton>
                    </section>
                    {error && <p>{error}</p>}
                </InputWrapper>
            }
        </form>
    )
}

export default CheckOutForm