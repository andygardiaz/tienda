import * as React from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedProducts, setStoredProducts] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setProducts = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedProducts) : value;
      setStoredProducts(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedProducts, setProducts];
};
