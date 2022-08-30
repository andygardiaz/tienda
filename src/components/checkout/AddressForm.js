import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CheckoutContext } from "../../Context/CheckoutContext";
import { Box, Button } from "@mui/material";

const AddressForm = () => {
  const { checkoutFields, handleNext, handleChange } =
    React.useContext(CheckoutContext);
  const { firstName, lastName, address1, address2, city, state, zip, country } =
    checkoutFields;

  const isError = React.useCallback(
    () =>
      Object.keys({
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      }).some(
        (name) =>
          (checkoutFields[name].required && !checkoutFields[name].value) ||
          checkoutFields[name].error
      ),
    [
      checkoutFields,
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      country,
    ]
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={address1.value}
            onChange={handleChange}
            error={!!address1.error}
            helperText={address1.error}
            required={address1.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={address2.value}
            onChange={handleChange}
            error={!!address2.error}
            helperText={address2.error}
            required={address2.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            value={city.value}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={state.value}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleChange}
            error={!!state.error}
            helperText={state.error}
            required={state.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            value={zip.value}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange}
            error={!!zip.error}
            helperText={zip.error}
            required={zip.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={country.value}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleChange}
            error={!!country.error}
            helperText={country.error}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
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

export default AddressForm;
