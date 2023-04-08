import { useContext } from "react";
import "./checkout.styles.scss";
import { cartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartProducts } = useContext(cartContext);
  const total = cartProducts.reduce(
    (total, product) => total + product.count * product.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>

      {cartProducts.map((product) => {
        return <CheckoutItem key={product.id} {...product} />;
      })}

      <span className="total">Total: $ {total}</span>
    </div>
  );
};

export default Checkout;
