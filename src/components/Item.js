import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export const ProductCard = ({ product }) => {
  const { addProduct } = React.useContext(CartContext);
  return (
    <Card sx={{ position: "relative" }}>
      <Chip
        label={product.category[0].name}
        color="primary"
        sx={{ position: "absolute", top: "1rem", left: "1rem" }}
      />
      <Link to={`/item/${product.id}`}>
        <CardMedia
          component="img"
          height="320"
          image={product.second_image}
          alt={product.name}
        />
      </Link>
      <CardContent sx={{ padding: "1rem" }}>
        <Link to={`/item/${product.id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </Link>
        <Typography gutterBottom variant="h5" component="div">
          <bdi>
            <span>$</span>
            {product.price}
          </bdi>
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <IconButton aria-label="Visitas">
          <VisibilityIcon
            sx={{
              color: "gray",
            }}
          />
          {product.visits}
        </IconButton>
        <IconButton
          aria-label="añadir al carrito"
          onClick={() => addProduct(product, 1)}
        >
          <AddShoppingCartIcon
            sx={{
              color: "gray",
            }}
          />
        </IconButton>
      </Stack>
    </Card>
  );
};
