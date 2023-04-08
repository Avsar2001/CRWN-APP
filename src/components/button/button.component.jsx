import "./button.styles.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, displayType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[displayType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
