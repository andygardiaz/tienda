import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import { Drawer } from "@mui/material";
import { StyledNavLink } from "./styles/styles";

const activeStyle = {
  paddingBotom: "1rem",
  borderBottom: "2px solid #fff",
};

const activeDrawerStyle = {
  color: "#1976d2",
  paddingBotom: "1rem",
  borderBottom: "2px solid #1976d2",
};

const inactiveDrawerStyle = {
  color: "inherit",
  paddingBotom: "1rem",
  borderBottom: "2px solid transparent",
};

export const NavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { totalProducts } = React.useContext(CartContext);
  const { categories } = React.useContext(ProductContext);
  const pages = [{ name: "Productos", url: "/" }];

  const handleOpenNavMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpenMenu(false);
  };

  pages.push(
    ...categories?.map((category) => ({
      name: category.name,
      url: `/category/${category.id}`,
    }))
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              fill="#ffffff"
              viewBox="0 0 32 32"
            >
              <path d="M29,13a1.009,1.009,0,0,0-.129-.492l-4.516-8A1,1,0,0,0,23.484,4H8.516a1,1,0,0,0-.871.508l-4.516,8A1.009,1.009,0,0,0,3,13a3.987,3.987,0,0,0,2,3.444V26a2,2,0,0,0,2,2h5.88a2,2,0,0,0,2-2V23.293a1.218,1.218,0,0,1,1-1.237A1.122,1.122,0,0,1,17.12,23.17V26a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V16.444A3.987,3.987,0,0,0,29,13Zm-2.014.238A2,2,0,0,1,23,13a.912.912,0,0,0-.028-.138.864.864,0,0,0-.01-.134L21.061,6H22.9ZM13.017,6H15v7a2,2,0,0,1-3.99.1ZM17,6h1.983l2.007,7.1A2,2,0,0,1,17,13ZM9.1,6h1.839l-1.9,6.728a.864.864,0,0,0-.01.134A.912.912,0,0,0,9,13a2,2,0,0,1-3.986.238ZM25,26H19.12V23.17a3.12,3.12,0,0,0-3.44-3.1,3.216,3.216,0,0,0-2.8,3.227V26H7V17a3.99,3.99,0,0,0,3-1.357,3.971,3.971,0,0,0,6-.025,3.971,3.971,0,0,0,6,.025A3.99,3.99,0,0,0,25,17Z" />
            </svg>
            Chopi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              PaperProps={{ sx: { width: 200, padding: "2rem" } }}
              open={Boolean(openMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page.name + index} onClick={handleCloseNavMenu}>
                  <StyledNavLink
                    to={page.url}
                    style={({ isActive }) =>
                      isActive ? activeDrawerStyle : inactiveDrawerStyle
                    }
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </StyledNavLink>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              fill="#ffffff"
              viewBox="0 0 32 32"
            >
              <path d="M29,13a1.009,1.009,0,0,0-.129-.492l-4.516-8A1,1,0,0,0,23.484,4H8.516a1,1,0,0,0-.871.508l-4.516,8A1.009,1.009,0,0,0,3,13a3.987,3.987,0,0,0,2,3.444V26a2,2,0,0,0,2,2h5.88a2,2,0,0,0,2-2V23.293a1.218,1.218,0,0,1,1-1.237A1.122,1.122,0,0,1,17.12,23.17V26a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V16.444A3.987,3.987,0,0,0,29,13Zm-2.014.238A2,2,0,0,1,23,13a.912.912,0,0,0-.028-.138.864.864,0,0,0-.01-.134L21.061,6H22.9ZM13.017,6H15v7a2,2,0,0,1-3.99.1ZM17,6h1.983l2.007,7.1A2,2,0,0,1,17,13ZM9.1,6h1.839l-1.9,6.728a.864.864,0,0,0-.01.134A.912.912,0,0,0,9,13a2,2,0,0,1-3.986.238ZM25,26H19.12V23.17a3.12,3.12,0,0,0-3.44-3.1,3.216,3.216,0,0,0-2.8,3.227V26H7V17a3.99,3.99,0,0,0,3-1.357,3.971,3.971,0,0,0,6-.025,3.971,3.971,0,0,0,6,.025A3.99,3.99,0,0,0,25,17Z" />
            </svg>
            Chopi
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button key={page.name + index} variant="text">
                <StyledNavLink
                  to={page.url}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {page.name}
                </StyledNavLink>
              </Button>
            ))}
          </Box>

          <Box>
            <Link to={totalProducts !== 0 && `/cart`}>
              <CartWidget cartItems={totalProducts} />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
