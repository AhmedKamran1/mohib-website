import { Box, styled } from "@mui/material";

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#D8D8D8",
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  borderRadius: "5px",
  color: "black",
  minHeight: "420px",
  transition:"0.2s all",
  cursor:"pointer",

  "&:hover": {
    backgroundColor: "#320505",
    color: "white",
    boxShadow: "1px 1px 15px 5px white",
    transform:"scale(1.03)"
  },
}));
