import React from "react";
import { useOrder } from "./OrderProvider";
import { Link } from "react-router-dom";
import Product from "./imgs/ImagensProduto.svg";
import Morango from "./imgs/morango.svg";
import Banana from "./imgs/banana.svg";
import Kiwi from "./imgs/kiwi.svg";
import { NavBar } from "./NavBar";
import "./FruitSlection.css";
import { DescInfos } from "./DescInfos";

const FruitSelection: React.FC = () => {
  const { selections, updateSelections, totalValue } = useOrder();

  const handleFruitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fruit = e.target.value;
    const isChecked = e.target.checked;
    let updatedFruits = [...selections.fruits];

    if (isChecked && !updatedFruits.includes(fruit)) {
      updatedFruits.push(fruit);
    } else {
      updatedFruits = updatedFruits.filter((item) => item !== fruit);
    }

    updateSelections({ ...selections, fruits: updatedFruits });
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
              <p>Escolha as frutas</p>
              <p>Escolha pelo menos 1 opção.</p>
              <div className="fruit-class">
                <label>
                  <div className="fruit-algn">
                    <img src={Banana} />
                    Banana
                  </div>
                  <div>
                    +R$ 3
                    <input
                      required
                      type="radio"
                      value="Banana"
                      checked={selections.fruits.includes("Banana")}
                      onChange={handleFruitChange}
                    />
                  </div>
                </label>
                <label>
                  <div className="fruit-algn">
                    <img src={Morango} />
                    Morango
                  </div>
                  <div>
                    +R$ 3
                    <input
                      required
                      type="radio"
                      value="Morango"
                      checked={selections.fruits.includes("Morango")}
                      onChange={handleFruitChange}
                    />
                  </div>
                </label>
                <label>
                  <div className="fruit-algn">
                    <img src={Kiwi} />
                    Kiwi
                  </div>
                  <div>
                    +R$ 3
                    <input
                      required
                      type="radio"
                      value="Kiwi"
                      checked={selections.fruits.includes("Kiwi")}
                      onChange={handleFruitChange}
                    />
                  </div>
                </label>
              </div>
              <div className="btn-content2">
                <button className="btn3"> - 1 + </button>
                <Link className="next-page" to="/toppings">
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

export default FruitSelection;
