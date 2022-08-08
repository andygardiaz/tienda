import React, { useContext } from "react";
import List from "@mui/material/List";
import { CartContext } from "../Context/CartContext";
import Divider from "@mui/material/Divider";
import { CartListItem } from "./CartListItem";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { storedProducts, totalAmmount, removeProduct } =
    useContext(CartContext);

  return (
    <>
      {storedProducts.length > 0 ? (
        <>
          <List>
            {storedProducts.map((product, index) => (
              <>
                <CartListItem
                  key={`product-${product.id}`}
                  product={product}
                  removeProduct={removeProduct}
                />
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="div">
              Total: ${totalAmmount}
            </Typography>
            <Link to="#">
              <Button variant="contained">Checkout</Button>
            </Link>
          </Box>
        </>
      ) : (
        <Box
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="div">
            No tiene elementos en el carrito
          </Typography>
          <Link to="/">
            <Button variant="contained">Volver al inicio</Button>
          </Link>
        </Box>
      )}
    </>
  );
};
