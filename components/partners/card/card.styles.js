import { Box, styled } from "@mui/material";

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#D8D8D8",
  padding: `${theme.spacing(3.5)} ${theme.spacing(2.5)}`,
  textAlign: "center",
  borderRadius: "5px",
  color: "black",
  transition: "0.2s all",
  cursor: "pointer",
  minHeight:"180px",

  "&:hover": {
    backgroundColor: "#320505",
    color: "white",
    boxShadow: "1px 1px 15px 5px white",
    transform: "scale(1.03)",
  },
}));
