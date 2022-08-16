import * as React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { CartContext } from "../Context/CartContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
};

const CheckoutForm = () => {
  const { idOrder, addOrder } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = React.useState({
    name: {
      state: false,
      message: "",
    },
    email: {
      state: false,
      message: "",
    },
    phone: {
      state: false,
      message: "",
    },
  });

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(form.email).toLowerCase())) {
      setError({
        ...error,
        email: {
          state: true,
          message: "El email debe ser válido",
        },
      });
    } else {
      setError({
        ...error,
        email: {
          state: false,
          message: "",
        },
      });
    }
  };

  const validateName = () => {
    if (form.name.length < 3) {
      setError({
        ...error,
        name: {
          state: true,
          message: "El nombre debe tener al menos 3 caracteres",
        },
      });
    } else {
      setError({
        ...error,
        name: {
          state: false,
          message: "",
        },
      });
    }
  };

  const validatePhone = () => {
    const re = /^\d{9}$/;
    if (!String(form.phone).toLowerCase().match(re)) {
      setError({
        ...error,
        phone: {
          state: true,
          message: "El telefono debe ser válido",
        },
      });
    } else {
      setError({
        ...error,
        phone: {
          state: false,
          message: "",
        },
      });
    }
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    validateName();
    validateEmail();
    validatePhone();
    if (
      !error.name.state &&
      form.name.length &&
      !error.email.state &&
      form.email.length &&
      !error.phone.state &&
      form.phone.length
    ) {
      addOrder(form);
      handleOpen();
    }
  };

  return (
    <>
      <Box
        sx={{ width: "100%" }}
        component="form"
        p={4}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 3,
          }}
        >
          <TextField
            error={error.name.state}
            id="name"
            value={form.name}
            name="name"
            label="Name"
            onChange={(event) => {
              changeHandler(event);
            }}
            onKeyUp={() => {
              validateName();
            }}
            helperText={error.name.message}
            sx={{ width: "100%" }}
          />
          <TextField
            error={error.email.state}
            id="email"
            value={form.email}
            name="email"
            label="Email"
            onChange={(event) => {
              changeHandler(event);
            }}
            onKeyUp={() => {
              validateEmail();
            }}
            helperText={error.email.message}
            sx={{ width: "100%" }}
          />
          <TextField
            error={error.phone.state}
            id="phone"
            value={form.phone}
            name="phone"
            label="Phone"
            onChange={(event) => {
              changeHandler(event);
            }}
            onKeyUp={() => {
              validatePhone();
            }}
            helperText={error.phone.message}
            sx={{ width: "100%" }}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Orden registrada con éxito
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Número de orden: {idOrder}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CheckoutForm;
