import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Card from "./card/card";

const Partners = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ backgroundColor: "#00001D", pt: 12, pb: 10 }}
    >
      <Grid item xs={8} sx={{ color: "white", textAlign: "center" }}>
        <Typography variant="h3" fontWeight={600} sx={{ mb: 2 }}>
          WE WORK WITH ONLY BEST BRANDS
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image src="/partners.webp" alt="partners" height={300} width={875} />
      </Grid>
      <Grid item xs={12} sx={{ pl: 5, pr: 5 }}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default Partners;
