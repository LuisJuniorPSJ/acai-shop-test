import React from "react";
import { useOrder } from "./OrderProvider";
import Banner from "./imgs/Banner.svg";
import "./Summary.css";
import { NavBar } from "./NavBar";

const Summary: React.FC = () => {
  const { selections } = useOrder();

  const calculateTotal = (): number => {
    let total = 0;

    if (selections.size === "Pequeno - 330ml") {
      total += 10;
    } else if (selections.size === "Médio - 500ml") {
      total += 12;
    } else if (selections.size === "Grande - 700ml") {
      total += 15;
    }

    total += selections.fruits.length * 3;
    total += selections.toppings.length * 3;

    return total;
  };

  const calculateDeliveryTime = (): number => {
    let baseTime = 0;

    if (selections.size === "Pequeno - 330ml") {
      baseTime += 5;
    } else if (selections.size === "Médio - 500ml") {
      baseTime += 7;
    } else if (selections.size === "Grande - 700ml") {
      baseTime += 9;
    }

    return baseTime;
  };

  const deliveryTime: number = calculateDeliveryTime();
  const totalValue: number = calculateTotal();

  return (
    <>
      <NavBar />
      <div className="container-summary">
        <div className="cart-content">
          <h2>Meus Pedidos</h2>
          <h3>Pedidos Ativos</h3>
          <div className="product-container">
            <div className="descri-container">
              <img src={Banner} alt="Banner" />
              <div className="descri-content">
                <p>1 Item</p>
                <p>Açaí Natural</p>
                <p>- {selections.size}</p>
                <p>- {selections.fruits.join(", ")}</p>
                <p>- {selections.toppings.join(", ")}</p>
              </div>
            </div>
            <div className="timer-content">
              <div>
                <p>Previsão de entrega</p>
                <p>{`Tempo : ${deliveryTime}`} minutos</p>
              </div>
              <div>
                <p>Valor total</p>
                <p>R${totalValue.toFixed(2)}</p>
              </div>
            </div>
            <div className="btn-content23">
              <button className="btn-edit45">AJUDA</button>
              <button className="btn-edit22">RASTREAR PEDIDO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
