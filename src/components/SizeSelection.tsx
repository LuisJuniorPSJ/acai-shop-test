import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useOrder, OrderContextProps } from "./OrderProvider";
import "./SizeSelection.css";
import "./ClassesComp.css";
import "./DescInfos.css";
import Product from "./imgs/ImagensProduto.svg";
import { priceSchema } from "../schemas/priceSchemas";
import { useDispatch } from "react-redux";
import { selectSize } from "../actions/sizeActions";
import { NavBar } from "./NavBar";
import { DescInfos } from "./DescInfos";

const SizeSelection: React.FC = () => {
  const dispatch = useDispatch();

  const { selections, updateSelections, totalValue }: OrderContextProps =
    useOrder();
  const [prices, setPrices] = useState<{ name: string; price: number }[]>([]);

  useEffect(() => {
    fetch("https://655e12759f1e1093c59a77f6.mockapi.io/api/prices/prices")
      .then((response) => response.json())
      .then((data) => {
        const parsedPrices = data.map((item: object) => {
          try {
            const validatedPrice = priceSchema.parse(item);
            return validatedPrice;
          } catch (error) {
            console.error("Erro de validação:", error);

            return { name: "Preço Inválido", price: 0 };
          }
        });

        setPrices(parsedPrices);
      })
      .catch((error) => console.error("Erro ao buscar os preços:", error));
  }, []);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateSelections({ ...selections, size: value });
    dispatch(selectSize(value));
  };

  const formatPrice = (value: number) => {
    return `R$${value.toFixed(2)}`;
  };

  return (
    <>
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
              <p>Escolha o tamanho</p>
              <p>Escolha pelo menos 1 opção.</p>
              <div className="options-wrapper">
                {prices.map((price, index) => (
                  <div className="option-content" key={index}>
                    <div className="info-block">
                      <div className="size-info">
                        <label htmlFor={`price-${index}`}>{price.name}</label>
                      </div>
                      <div className="price-info">
                        <span>{formatPrice(price.price)}</span>
                        <input
                          type="radio"
                          id={`price-${index}`}
                          value={price.name}
                          checked={selections.size === price.name}
                          onChange={handleRadioChange}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-content2">
                <button className="btn3"> - 1 + </button>
                <Link className="next-page" to="/fruits">
                  {`AVANÇAR - R$${totalValue?.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeSelection;
