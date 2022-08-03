import * as React from "react";
import { useFetch } from "../hooks/useFetch";
import { API_PRODUCTS } from "../constants";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [category, setCategory] = React.useState("");

  const {
    data,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch(
    category ? `${API_PRODUCTS}?category=${category}` : API_PRODUCTS,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  React.useEffect(() => {
    if (data) {
      setProducts(data.results);
    }
  }, [data, category]);

  React.useEffect(() => {
    setLoading(loadingProducts);
  }, [loadingProducts]);

  React.useEffect(() => {
    setError(errorProducts);
  }, [errorProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
