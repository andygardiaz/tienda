import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ProductList } from "./ItemList";
import { ProductContext } from "../Context/ProductContext";

export const ItemListContainer = ({ category }) => {
  const { products, loading, error, setCategory } = useContext(ProductContext);

  useEffect(() => {
    if (category) {
      setCategory(category);
    }
  }, [category]);

  return (
    <Grid container spacing={4}>
      {!loading && !error && products && <ProductList items={products} />}
    </Grid>
  );
};

ItemListContainer.propTypes = {
  category: PropTypes.string,
};

ItemListContainer.defaultProps = {
  category: "",
};
