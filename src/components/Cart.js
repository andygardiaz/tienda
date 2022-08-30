import React, { useContext } from "react";
import List from "@mui/material/List";
import { CartContext } from "../Context/CartContext";
import { CartListItem } from "./CartListItem";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StyledLink } from "./styles/styles";

export const Cart = () => {
  const { storedProducts, totalAmmount, removeProduct } =
    useContext(CartContext);

  return (
    <>
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}
        component="span"
        variant="h4"
        color="text.primary"
      >
        Cart
      </Typography>
      {storedProducts.length > 0 ? (
        <>
          <List>
            {storedProducts.map((product, index) => (
              <>
                <CartListItem
                  key={`product-${product.id}-${index}`}
                  product={product}
                  removeProduct={removeProduct}
                />
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
              gap: "1.5rem",
            }}
          >
            <Typography variant="h5" component="div" color="#00e676">
              Total: ${totalAmmount}
            </Typography>
            <StyledLink to="/checkout">
              <Button variant="contained">Checkout</Button>
            </StyledLink>
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
            gap: "1.5rem",
          }}
        >
          <Typography variant="h4" component="div">
            No tiene elementos en el carrito
          </Typography>
          <StyledLink to="/">
            <Button variant="contained">Volver al inicio</Button>
          </StyledLink>
        </Box>
      )}
    </>
  );
};
