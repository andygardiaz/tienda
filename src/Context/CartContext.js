import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [storedProducts, setProducts] = useLocalStorage("cart", []);
  const [totalAmmount, setTotalAmmount] = React.useState(0);

  const addProduct = (product, quantity) => {
    const productInCart = storedProducts.find((p) => p.id === product.id);
    if (productInCart) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...product, quantity },
      ]);
    }
  };

  const removeProduct = (product) => {
    const productInCart = storedProducts.find((p) => p.id === product.id);
    if (productInCart) {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== product.id)
      );
    } else {
      setProducts((prevProducts) => prevProducts);
    }
  };

  const getTotalAmmount = () => {
    const total = storedProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotalAmmount(total);
  };

  React.useEffect(() => {
    getTotalAmmount();
  }, [storedProducts]);

  return (
    <CartContext.Provider
      value={{
        storedProducts,
        totalAmmount,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
