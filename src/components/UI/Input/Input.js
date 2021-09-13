import { Wrapper } from "./Input.styles"
import React from "react"

const Input = React.forwardRef((props, ref) => {
    return (
        <Wrapper>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </Wrapper>
    )
})

export default Input