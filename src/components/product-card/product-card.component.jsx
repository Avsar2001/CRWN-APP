import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { cartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { changeProductQuantity } = useContext(cartContext);

  const addToCart = () => {
    changeProductQuantity(product, 1);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Button displayType={"invert"} onClick={addToCart}>
        Add to cart
      </Button>

      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
