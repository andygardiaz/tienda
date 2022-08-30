import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, Rating, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../Context/CartContext";
import { StyledCard, StyledCardMedia, StyledLink } from "./styles/styles";

export const ProductCard = ({ product }) => {
  const { addProduct } = React.useContext(CartContext);
  return (
    <StyledCard>
      <StyledLink to={`/category/${product.category_id}`}>
        <Chip
          label={product.category_name}
          color="primary"
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
      </StyledLink>
      <StyledCardMedia>
        <StyledLink to={`/items/${product.id}`}>
          <CardMedia
            component="img"
            height="320"
            image={product.main_image}
            alt={product.title}
          />
        </StyledLink>
      </StyledCardMedia>
      <CardContent
        sx={{
          padding: "1rem 1rem 4rem",
        }}
      >
        <div>
          <StyledLink to={`/items/${product.id}`}>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
          </StyledLink>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#00e676", fontWeight: 700 }}
          >
            <bdi>
              <span>$</span>
              {product.price}
            </bdi>
          </Typography>
        </div>
      </CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          right: "1rem",
        }}
      >
        <Rating name="Product rate" value={product.rate} readOnly />
        <IconButton
          aria-label="añadir al carrito"
          color="secondary"
          onClick={() => addProduct(product, 1)}
        >
          <AddShoppingCartIcon
            sx={{
              color: "secondary",
            }}
          />
        </IconButton>
      </Stack>
    </StyledCard>
  );
};
