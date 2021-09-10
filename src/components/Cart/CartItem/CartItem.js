import { CartItemButtonsWrapper, Wrapper } from './CartItem.styles';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Wrapper>
      <div>
        <h2>{props.name}</h2>
        <section>
          <p>{price}</p>
          <span>x {props.amount}</span>
        </section>
      </div>
      <CartItemButtonsWrapper>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </CartItemButtonsWrapper>
    </Wrapper>
  );
};

export default CartItem;
