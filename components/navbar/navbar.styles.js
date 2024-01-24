import { AppBar, Box, Button, styled } from "@mui/material";

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  height: "90px",
}));

export const NavItems = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
}));

export const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  height: "100%",
  color: "black",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderBottom: "3px solid transparent",
  "&:hover": {
    borderBottom: "3px solid darkred",
    color: "darkred",
  },
}));
