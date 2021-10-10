import useInput from "../../hooks/use-input"
import { CancelButton, InputWrapper, SubmitButton } from "./CheckOutForm.styles"
import Input from "../UI/Input/Input"
import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import Submission from "../Submission/Submission"
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
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress
    } = useInput(isNotEmpty)

    let formIsValid = false

    if (nameIsValid && addressIsValid) {
        formIsValid = true
    }

    const createOrder = (clientName, clientAddress, orderText, orderData) => {
        const generatedId = orderData.name;
        const createdTask = {
            id: generatedId,
            name: clientName,
            address: clientAddress,
            order: orderText
        };

        submitHandler(createdTask);
    };


    const enterOrderHandler = async (clientName, clientAddress, orderText) => {
        sendOrderRequest(
            {
                url: 'https://food-order-app-db98e-default-rtdb.firebaseio.com/orders.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    name: clientName,
                    address: clientAddress,
                    order: orderText
                }
            },
            createOrder.bind(null, clientName, clientAddress, orderText)
        )
    }

    const submitHandler = event => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        enterOrderHandler(nameValue, addressValue, cartCtx.items)

        resetName()
        resetAddress()
        setIsSubmitted(true)
    }

    return (
        <form onSubmit={submitHandler}>
            {isSubmitted ?
                <Submission /> :
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
                        label='Street'
                        input={{
                            id: 'street',
                            type: 'text',
                            onChange: addressChangeHandler,
                            onBlur: addressBlurHandler,
                            value: addressValue
                        }}
                    />
                    {addressHasError && <p>Address must not be empty</p>}
                    <Input
                        label='Post Code'
                        input={{
                            id: 'postal',
                            type: 'text',
                            onChange: addressChangeHandler,
                            onBlur: addressBlurHandler,
                            value: addressValue
                        }}
                    />
                    {addressHasError && <p>Address must not be empty</p>}
                    <Input
                        label='City'
                        input={{
                            id: 'city',
                            type: 'text',
                            onChange: addressChangeHandler,
                            onBlur: addressBlurHandler,
                            value: addressValue
                        }}
                    />
                    {addressHasError && <p>Address must not be empty</p>}
                    <section>
                        <CancelButton type='button' onClick={props.onCancel}>Cancel</CancelButton>
                        <SubmitButton disabled={!formIsValid}>{isLoading ? 'Submitting order...' : 'Submit'}</SubmitButton>
                    </section>
                    {error && <p>{error}</p>}
                </InputWrapper>
            }
        </form>
    )
}

export default CheckOutForm