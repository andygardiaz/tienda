import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { CheckoutContext } from "../../Context/CheckoutContext";
import { CartContext } from "../../Context/CartContext";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://#">
        chopi.es
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const steps = ["Shipping address", "Payment details", "Review your order"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const theme = createTheme();

const Checkout = () => {
  const { activeStep } = React.useContext(CheckoutContext);
  const { idOrder } = React.useContext(CartContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper elevation={1} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  {`Your order number is ${idOrder}. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.`}
                </Typography>
              </>
            ) : (
              <>{getStepContent(activeStep)}</>
            )}
          </>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default Checkout;
