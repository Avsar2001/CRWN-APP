import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { cartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartProducts } = useContext(cartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((product) => {
          return <CartItem key={product.id} {...product} />;
        })}
      </div>
      <Button>
        <Link to="/checkout">Go to checkout</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
