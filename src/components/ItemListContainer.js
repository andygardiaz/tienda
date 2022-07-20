import React from "react";
import { Grid } from "@mui/material";
import { ProductList } from "./ItemList";
import { API_PRODUCTS } from "../constants";
import { useFetch } from "../hooks/useFetch";

export const ItemListContainer = () => {
  const { data, loading, error } = useFetch(API_PRODUCTS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (
    <Grid container spacing={4}>
      {!loading && !error && data && <ProductList items={data.results} />}
    </Grid>
  );
};
