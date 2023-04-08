import "./cart-item.styles.scss";

const CartItem = ({ imageUrl, name, price, count }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          $ {price} X {count}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
