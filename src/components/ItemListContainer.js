import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ProductList } from "./ItemList";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const { products, getProducts, getProductsByCategory } =
    useContext(ProductContext);

  useEffect(() => {
    category ? getProductsByCategory(category) : getProducts();
  }, [category]);

  return (
    <>
      <Grid container spacing={4}>
        {products && <ProductList items={products} />}
      </Grid>
    </>
  );
};

ItemListContainer.propTypes = {
  category: PropTypes.string,
};

ItemListContainer.defaultProps = {
  category: "",
};
