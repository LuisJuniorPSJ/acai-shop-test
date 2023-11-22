import React, { createContext, useContext, useState, ReactNode } from "react";

export interface OrderContextProps {
  selections: {
    size: string;
    fruits: string[];
    toppings: string[];
  };
  updateSelections: (newSelections: {
    size?: string;
    fruits?: string[];
    toppings?: string[];
  }) => void;
  totalValue: number;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrder = (): OrderContextProps => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder deve ser usado dentro de um OrderProvider");
  }
  return context;
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selections, setSelections] = useState<OrderContextProps["selections"]>(
    {
      size: "",
      fruits: [],
      toppings: [],
    }
  );

  const [totalValue, setTotalValue] = useState<number>(0);

  const updateSelections = (newSelections: {
    size?: string;
    fruits?: string[];
    toppings?: string[];
  }): void => {
    const updatedSelections = { ...selections, ...newSelections };
    setSelections(updatedSelections);

    const newValue = calculateTotalValue(updatedSelections);
    setTotalValue(newValue);
  };

  const calculateTotalValue = (selections: {
    size: string;
    fruits: string[];
    toppings: string[];
  }): number => {
    const priceMap: Record<string, number> = {
      "Pequeno - 330ml": 10,
      "Médio - 500ml": 12,
      "Grande - 700ml": 15,
      Banana: 3,
      Morango: 3,
      Kiwi: 3,
      Granola: 3,
      Paçoca: 3,
      "Leite Ninho": 3,
    };

    let total = priceMap[selections.size];

    selections.fruits.forEach((fruit) => {
      total += priceMap[fruit];
    });

    selections.toppings.forEach((topping) => {
      total += priceMap[topping];
    });

    return total;
  };
  const contextValue: OrderContextProps = {
    selections,
    updateSelections,
    totalValue,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
