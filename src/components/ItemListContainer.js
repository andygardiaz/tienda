import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { ProductList } from "./ItemList";
import { API_PRODUCTS } from "../constants";
import { useFetch } from "../hooks/useFetch";

export const ItemListContainer = ({ category }) => {
  const { data, loading, error } = useFetch(
    `${API_PRODUCTS}?category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return (
    <Grid container spacing={4}>
      {!loading && !error && data && <ProductList items={data.results} />}
    </Grid>
  );
};

ItemListContainer.propTypes = {
  category: PropTypes.string,
};

ItemListContainer.defaultProps = {
  category: "",
};
