import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledLink } from "./styles/styles";

export const CartListItem = ({ product, removeProduct }) => {
  return (
    <Card sx={{ marginBottom: "1.25rem", paddingBottom: "0.25rem" }}>
      <ListItem
        alignItems="flex-start"
        sx={{ gap: "1.5rem", alignItems: "center" }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeProduct(product)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Link to={`/items/${product.id}`}>
            <Avatar
              alt={product.title}
              src={product.main_image}
              variant="square"
              sx={{ width: 150, height: 150 }}
            />
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={
            <StyledLink to={`/items/${product.id}`}>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {product.title}
              </Typography>
            </StyledLink>
          }
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {`$${product.price} x ${product.quantity} =`}
              </Typography>
              <Typography
                sx={{ display: "inline", color: "#00e676", fontWeight: 700 }}
                component="span"
                variant="h6"
              >
                {` $${product.price * product.quantity}`}
              </Typography>
            </>
          }
        />
      </ListItem>
    </Card>
  );
};
