import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [disabledAdd, setDisabledAdd] = useState(false);
  const [disabledRemove, setDisabledRemove] = useState(false);

  const handleAdd = () => {
    if (stock > count) {
      setCount(count + 1);
      onAdd && onAdd("Articulo agregado");
    }
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
      onAdd && onAdd("Articulo eliminado");
    }
  };

  useEffect(() => {
    if (count === 1) {
      setDisabledRemove(true);
    } else {
      setDisabledRemove(false);
    }
    if (stock <= count) {
      setDisabledAdd(true);
    } else {
      setDisabledAdd(false);
    }
  }, [count, stock]);

  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <Stack direction="row" spacing={2}>
          <IconButton
            aria-label="quitar item"
            disabled={disabledRemove}
            onClick={() => handleRemove()}
          >
            <RemoveIcon />
          </IconButton>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            elevation={0}
          >
            {count}
          </Paper>
          <IconButton
            aria-label="agregar item"
            disabled={disabledAdd}
            onClick={() => handleAdd()}
          >
            <AddIcon />
          </IconButton>
        </Stack>
      </Paper>
      <Button variant="outlined">Agregar al carrito</Button>
    </Stack>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
};

ItemCount.defaultProps = {
  stock: 0,
  initial: 1,
};
