import { ModalWrapper, Wrapper } from "./Modal.styles"
import ReactDom from "react-dom"

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return (
        <ModalWrapper>
            {ReactDom.createPortal(<Wrapper  onClick={props.onHideCart}/>, portalElement)}
            {props.children}
        </ModalWrapper>
    )
}

export default Modal