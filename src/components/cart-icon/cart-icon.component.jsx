import { useContext } from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggleCart, totalItems } = useContext(cartContext);

  const toggleCartDropdown = () => {
    toggleCart();
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
