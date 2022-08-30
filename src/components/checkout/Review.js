import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../Context/CartContext";
import { CheckoutContext } from "../../Context/CheckoutContext";
import { Box, Button } from "@mui/material";

const Review = () => {
  const { storedProducts, totalAmmount, addOrder, clearCart } =
    React.useContext(CartContext);
  const { checkoutFields, handleBack, handleNext } =
    React.useContext(CheckoutContext);
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    cardName,
    cardNumber,
    cardExpiration,
  } = checkoutFields;

  const handleSubmit = () => {
    addOrder({
      firstName: firstName.value,
      lastName: lastName.value,
      address1: address1.value,
      address2: address2.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      country: country.value,
    });
    clearCart();
    handleNext();
  };

  const formatCardNumber = cardNumber.value.replace(/(.{4})/g, "$1 ");

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {storedProducts.map((product, index) => (
          <ListItem
            key={product.title + index}
            sx={{ py: 1, px: 0, alignItems: "baseline" }}
          >
            <ListItemText
              primary={product.title}
              sx={{ paddingRight: "1rem" }}
            />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalAmmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography
            gutterBottom
          >{`${firstName.value} ${lastName.value}`}</Typography>
          <Typography
            gutterBottom
          >{`${address1.value}, ${address2.value}, CP ${zip.value}, ${city.value}, ${state.value}, ${country.value}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Type:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Visa</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Holder:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardName.value}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formatCardNumber}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardExpiration.value}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" sx={{ ml: 1 }} onClick={handleSubmit}>
          Place order
        </Button>
      </Box>
    </>
  );
};

export default Review;
