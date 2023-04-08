import { useContext } from "react";
import "./checkout-item.styles.scss";
import { cartContext } from "../../contexts/cart.context";

const CheckoutItem = (product) => {
  const { imageUrl, name, price, count } = product;

  const { changeProductQuantity, removeProductFromCart } =
    useContext(cartContext);

  const addToCart = () => changeProductQuantity(product, 1);
  const reduceItemInCart = () => changeProductQuantity(product, -1);
  const removeItemFromCart = () => removeProductFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={reduceItemInCart}>
          &#10094;
        </span>
        <span className="value">{count}</span>
        <span className="arrow" onClick={addToCart}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={removeItemFromCart}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
