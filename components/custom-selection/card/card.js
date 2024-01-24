import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledCard } from "./card.styles";
import Link from "next/link";

const Card = () => {
  const cards = [
    {
      title: "Thunder 10",
      category: "Starter",
      description:
        "The perfect starter Gaming PC for first-time gamers. Optimized for multipliers online games. A great choice for budget gamers who are looking for a reliable gaming PC. ",
      pricing: "100,000",
    },
    {
      title: "Thunder 20",
      category: "Intermediate",
      description:
        "Designed for professional gamers, competitive gaming for higher refresh rates. A Perfect who is looking to play competitive esports on the highest FPS.",
      pricing: "150,000",
    },
    {
      title: "Thunder 30",
      category: "Advanced",
      description:
        "For streamers and content creators. Powerful enough to support high fps and resolution; ideal for content creation, graphics design, and video editing.  ",
      pricing: "300,000",
    },
    {
      title: "Thunder 40",
      category: "Pro",
      description:
        "For gamers who want extreme gaming and demand the best. Perfect for 3D rendering, modeling, animation and high resolution video editing.",
      pricing: "420,000",
    },
    {
      title: "Thunder 50",
      category: "Ultimate",
      description:
        "The ultimate and latest generation Gaming machine. Powered with intel 13Th Gen, Ryzen 7000 series, and RTX 4090. The fastest gaming PC in the market.",
      pricing: "800,000",
    },
    {
      title: "Thunder Custom",
      category: "Custom",
      description: "Build From Scratch",
      pricing: "????",
    },
  ];
  return (
    <Grid container columnSpacing={2} mt={10}>
      {cards.map((card, index) => (
        <Grid item xs={2} key={index}>
          <StyledCard>
            <Box textAlign="center">
              <Typography
                variant="body1"
                fontWeight={600}
                textTransform="capitalize"
              >
                {card.title}
              </Typography>
              <Typography variant="body2" textTransform="capitalize">
                {card.category}
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="body1">{card.description}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform="capitalize"
              >
                Starting At
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                PKR {card.pricing}
              </Typography>
            </Box>
            <Box>
              <Link href={card.category}>
                <Button variant="contained" color="error">
                  Start Building
                </Button>
              </Link>
            </Box>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
