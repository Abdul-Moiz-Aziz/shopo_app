import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const openQuickView = (prod) => setProduct(prod);
  const closeQuickView = () => setProduct(null);

  return (
    <QuickViewContext.Provider
      value={{ product, openQuickView, closeQuickView }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => useContext(QuickViewContext);
