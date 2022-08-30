import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { ItemCount } from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { ImageItemDetail } from "./ImageItemDetail";
import { CartContext } from "../Context/CartContext";
import { StyledLink } from "./styles/styles";

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
        sx={{ flexWrap: "wrap", gap: "4rem", alignItems: "flex-start" }}
      >
        <ImageItemDetail
          src={product.main_image}
          alt={product.title}
          style={{ marginTop: "3rem" }}
          width="45%"
        />
        <Stack spacing={2} sx={{ flex: "1 1 45%" }}>
          <Button size="small" onClick={() => goBack()}>
            Ir a atrás
          </Button>
          <Typography gutterBottom variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="span"
            color="#00e676"
          >
            ${product.price}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          {!counterState.hideCounter && (
            <ItemCount stock="10" initial={1} onAdd={onAdd} />
          )}
          <StyledLink to={`/cart`}>
            <Button variant="contained">Finalizar compra</Button>
          </StyledLink>
        </Stack>
      </Stack>
    </div>
  );
};
