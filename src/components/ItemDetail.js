import * as React from "react";
import { Button, Stack } from "@mui/material";
import { ItemCount } from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { ImageItemDetail } from "./ImageItemDetail";

export const ItemDetail = ({ product }) => {
  const [counterState, setCounterState] = React.useState({
    count: 1,
    hideCounter: false,
  });

  const onAdd = (state) => {
    setCounterState({ count: state.count, hideCounter: state.hideCounter });
    console.log("onAdd", state);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ flexWrap: "wrap", gap: "4rem" }}
      >
        <ImageItemDetail
          src={product.main_image}
          alt={product.name}
          width="48%"
        />
        <Stack spacing={2} sx={{ flex: "1 1 45%" }}>
          <Button size="small" onClick={() => goBack()}>
            Ir a atrás
          </Button>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          {!counterState.hideCounter && (
            <ItemCount stock="10" initial={1} onAdd={onAdd} />
          )}
          <Link to={`/cart`}>
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};