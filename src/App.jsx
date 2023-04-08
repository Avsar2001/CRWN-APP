import Home from "./Routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./Routes/shop/shop.component";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./Routes/authentication/authentication.component";
import Checkout from "./Routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
