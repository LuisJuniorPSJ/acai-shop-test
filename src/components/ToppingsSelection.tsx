import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "./OrderProvider";
import Product from "./imgs/ImagensProduto.svg";
import Granola from "./imgs/granola.svg";
import Paçoca from "./imgs/paçoca.svg";
import "./ToppingSelect.css";
import LeiteNinho from "./imgs/leite-ninho.svg";
import { NavBar } from "./NavBar";
import { DescInfos } from "./DescInfos";

const ToppingsSelection: React.FC = () => {
  const { selections, updateSelections, totalValue } = useOrder();

  const handleToppingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const topping = e.target.value;
    const isChecked = e.target.checked;
    let updatedToppings = [...selections.toppings];

    if (isChecked && !updatedToppings.includes(topping)) {
      updatedToppings.push(topping);
    } else {
      updatedToppings = updatedToppings.filter((item) => item !== topping);
    }

    updateSelections({ ...selections, toppings: updatedToppings });
  };

  return (
    <div>
      <NavBar />
      <div className="container-size">
        <div className="size-content">
          <div className="products-container">
            <img src={Product} alt="Açaí Natural" />
            <div className="info-content">
              <DescInfos />
              <p className="desc-content">
                Super Copo de 500 ml de Açaí Tradicional - Atenção: Contém
                somente açaí puro! Ideal para quem gosta de aproveitar um açaí
                puro ou rechear do seu jeito! Obs: não trocamos nem adicionamos
                itens a esse copo!
              </p>
              <p>Escolha os acompanhamentos</p>
              <p>Escolha até 3 opção.</p>
              <label>
                <div className="align-select">
                  <img src={Granola} />
                  Granola
                </div>
                <div>
                  +R$3
                  <input
                    type="checkbox"
                    value="Granola"
                    checked={selections.toppings.includes("Granola")}
                    onChange={handleToppingChange}
                  />
                </div>
              </label>
              <label>
                <div className="align-select">
                  <img src={Paçoca} />
                  Paçoca
                </div>
                <div>
                  +R$3
                  <input
                    type="checkbox"
                    value="Paçoca"
                    checked={selections.toppings.includes("Paçoca")}
                    onChange={handleToppingChange}
                  />
                </div>
              </label>
              <label>
                <div className="align-select">
                  <img src={LeiteNinho} />
                  Leite Ninho
                </div>
                <div>
                  +R$3
                  <input
                    type="checkbox"
                    value="Leite Ninho"
                    checked={selections.toppings.includes("Leite Ninho")}
                    onChange={handleToppingChange}
                  />
                </div>
              </label>
              <div className="btn-content2">
                <button className="btn3"> - 1 + </button>
                <Link className="next-page" to="/summary">
                  {`AVANÇAR - R$${totalValue.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToppingsSelection;
