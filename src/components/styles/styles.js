import { Card, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const StyledCardMedia = styled("div")(({ theme }) => ({
  height: "320px",
  overflow: "hidden",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  position: "relative",
  transition: "all .3s ease-in-out",
  overflow: "hidden",
  "&:hover": {
    "& .MuiCardMedia-root": {
      transform: "scale(1.1)",
      transition: "all .3s ease-in-out",
    },
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));
