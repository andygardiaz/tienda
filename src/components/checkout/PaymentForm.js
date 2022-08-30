import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CheckoutContext } from "../../Context/CheckoutContext";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const PaymentForm = () => {
  const { checkoutFields, handleChange, handleNext, handleBack } =
    React.useContext(CheckoutContext);
  const { cardName, cardNumber, cardExpiration, cardCvv } = checkoutFields;

  const isError = React.useCallback(
    () =>
      Object.keys({
        cardName,
        cardNumber,
        cardExpiration,
        cardCvv,
      }).some(
        (name) =>
          (checkoutFields[name].required && !checkoutFields[name].value) ||
          checkoutFields[name].error
      ),
    [checkoutFields, cardName, cardNumber, cardExpiration, cardCvv]
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardName"
            label="Name on card"
            name="cardName"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName.value}
            onChange={handleChange}
            error={!!cardName.error}
            helperText={cardName.error}
            required={cardName.required}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="cardNumber"
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber.value}
            onChange={handleChange}
            error={!!cardNumber.error}
            helperText={cardNumber.error}
            required={cardNumber.required}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            name="cardExpiration"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={cardExpiration.value}
            onChange={handleChange}
            error={!!cardExpiration.error}
            helperText={cardExpiration.error}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardCvv"
            label="CVV"
            name="cardCvv"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={cardCvv.value}
            onChange={handleChange}
            error={!!cardCvv.error}
            helperText={cardCvv.error}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ ml: 1 }}
          disabled={isError()}
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default PaymentForm;
