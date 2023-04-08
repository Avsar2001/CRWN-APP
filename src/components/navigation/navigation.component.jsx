import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.component.scss";
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { cartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { isCartOpen } = useContext(cartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <div className="nav-link">
            <CartIcon />
          </div>
        </div>
      </div>
      {isCartOpen ? <CartDropdown /> : ""}
      <Outlet />
    </>
  );
};

export default Navigation;
