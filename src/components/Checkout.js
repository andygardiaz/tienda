import { Typography } from "@mui/material";
import React from "react";
import CheckoutForm from "./ChckoutForm";

export const Checkout = () => {
  return (
    <>
      <Typography id="checkout-title" variant="h3" component="span">
        Datos de la orden a enviar
      </Typography>
      <CheckoutForm />
    </>
  );
};
