import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [storedProducts, setProducts] = useLocalStorage("cart", []);
  const [totalAmmount, setTotalAmmount] = React.useState(0);
  const [idOrder, setIdOrder] = React.useState();
  const [totalProducts, setTotalProducts] = React.useState(0);

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

  const getTotalProducts = () => {
    const total = storedProducts.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    setTotalProducts(total);
  };

  const mappedProducts = storedProducts.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price * product.quantity,
    };
  });

  const addOrder = (userData) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const order = {
      buyer: {
        ...userData,
      },
      items: [...mappedProducts],
      total: totalAmmount,
      date: new Date(),
    };

    addDoc(ordersCollection, order).then((snapshot) => setIdOrder(snapshot.id));
  };

  const clearCart = () => {
    setProducts([]);
  };

  React.useEffect(() => {
    getTotalAmmount();
    getTotalProducts();
  }, [storedProducts]);

  return (
    <CartContext.Provider
      value={{
        idOrder,
        storedProducts,
        totalAmmount,
        totalProducts,
        addProduct,
        removeProduct,
        addOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
