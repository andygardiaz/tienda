import * as React from "react";
import { Button, Stack } from "@mui/material";
import { ItemCount } from "./ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { ImageItemDetail } from "./ImageItemDetail";
import { CartContext } from "../Context/CartContext";

export const ItemDetail = ({ product }) => {
  const { addProduct } = React.useContext(CartContext);
  const [counterState, setCounterState] = React.useState({
    count: 1,
    hideCounter: false,
  });

  const onAdd = (state) => {
    setCounterState({ count: state.count, hideCounter: state.hideCounter });
    addProduct(product, state.count);
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
          alt={product.title}
          width="48%"
        />
        <Stack spacing={2} sx={{ flex: "1 1 45%" }}>
          <Button size="small" onClick={() => goBack()}>
            Ir a atrás
          </Button>
          <h1>{product.title}</h1>
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
