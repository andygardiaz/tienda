import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export const CartListItem = ({ product, removeProduct }) => {
  return (
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
        <Avatar
          alt={product.title}
          src={product.main_image}
          variant="square"
          sx={{ width: 150, height: 150 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="h5"
            color="text.primary"
          >
            {product.title}
          </Typography>
        }
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h6"
              color="text.primary"
            >
              {`$${product.price} x ${product.quantity}`}
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="h6"
              color="green"
            >
              {` = $${product.price * product.quantity}`}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};
