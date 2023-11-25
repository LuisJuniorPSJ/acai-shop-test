import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store"; // Importe a store configurada, não o rootReducer
import { OrderProvider } from "./components/OrderProvider";
import SizeSelection from "./components/SizeSelection";
import FruitSelection from "./components/FruitSelection";
import ToppingsSelection from "./components/ToppingsSelection";
import Summary from "./components/Summary";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <OrderProvider>
          <Routes>
            <Route path="/acai-shop-test" element={<SizeSelection />} />
            <Route path="/fruits" element={<FruitSelection />} />
            <Route path="/toppings" element={<ToppingsSelection />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </OrderProvider>
      </Router>
    </Provider>
  );
};

export default App;
