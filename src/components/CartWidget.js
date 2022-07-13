import React from "react";
import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const CartWidget = (props) => {
  return (
    <IconButton aria-label="añadir al carrito">
      <Badge badgeContent={props.cartItems} color="secondary">
        <AddShoppingCartIcon
          sx={{
            color: "white",
          }}
        />
      </Badge>
    </IconButton>
  );
};
