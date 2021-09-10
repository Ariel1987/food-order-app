import { Wrapper } from "./Input.styles"

const Input = props => {
    return (
        <Wrapper>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}></input>
        </Wrapper>
    )
}

export default Input