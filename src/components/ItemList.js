import { Grid } from "@mui/material";
import React from "react";
import { ProductCard } from "./Item";

export const ProductList = ({ items }) => {
  return (
    <>
      {items.map((product) => (
        <Grid item key={`product-${product.id}`} xs={12} sm={6} md={6} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </>
  );
};
