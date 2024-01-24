import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledCard } from "./card.styles";

const Card = () => {
  const cards = [
    {
      title: "10 MONTHS WARRANTY",
      description:
        "Every Gaming Pc from Zues Tech includes 10 months of local warranty for your peace of mind.",
    },
    {
      title: "FAST SERVICE",
      description:
        "Fast pace service at Zues Tech. We deliver all over Pakistan. Assembly time is 3-4 days and 2-3 days for shipping.",
    },
    {
      title: "100% GENUINE PRODUCTS",
      description:
        "At Zues Tech quality comes first. We only work with trusted brands, and deal in genuine products.",
    },
  ];
  return (
    <Grid container columnSpacing={2} mt={2} justifyContent="center">
      {cards.map((card, index) => (
        <Grid item xs={2.5} key={index}>
          <StyledCard>
            <Typography
              variant="body1"
              fontWeight={600}
              textTransform="capitalize"
              mb={3}
            >
              {card.title}
            </Typography>
            <Typography variant="body2" textTransform="capitalize">
              {card.description}
            </Typography>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
