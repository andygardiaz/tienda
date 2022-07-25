import { Button, Stack } from "@mui/material";
import React from "react";
import { ItemCount } from "./ItemCount";
import { useNavigate } from "react-router-dom";

export const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 12, sm: 12, md: 6 }}
      >
        <img src={product.main_image} alt={product.name} />
        <div>
          <Button size="small" onClick={() => goBack()}>
            Ir a atrás
          </Button>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <Stack spacing={2}>
            <ItemCount stock="10" onAdd={console.log("Artículo añadido")} />
          </Stack>
        </div>
      </Stack>
    </div>
  );
};
