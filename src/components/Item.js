import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export const ProductCard = ({ product }) => {
  const { addProduct } = React.useContext(CartContext);
  return (
    <Card sx={{ position: "relative" }}>
      <Link to={`/category/${product.category_id}`}>
        <Chip
          label={product.category_name}
          color="primary"
          sx={{ position: "absolute", top: "1rem", left: "1rem" }}
        />
      </Link>
      <Link to={`/items/${product.id}`}>
        <CardMedia
          component="img"
          height="320"
          image={product.main_image}
          alt={product.title}
        />
      </Link>
      <CardContent sx={{ padding: "1rem" }}>
        <Link to={`/items/${product.id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
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
