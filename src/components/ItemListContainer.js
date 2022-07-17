import React from "react";
import { Grid } from "@mui/material";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = () => {
  const handleCount = (action) => {
    console.log(action);
  };

  return (
    <Grid container spacing={2}>
      <ItemCount onAdd={handleCount} />
    </Grid>
  );
};
