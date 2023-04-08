import { createContext, useState } from "react";
import productsList from "../assets/shop-data.json";

export const productContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products] = useState(productsList);

  return (
    <productContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
