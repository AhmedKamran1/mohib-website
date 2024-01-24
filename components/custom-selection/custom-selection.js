import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import Card from "./card/card";

const CustomSelection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ backgroundColor: "#00001D", pt: 12, pb: 10, mt: "90px" }}
    >
      <Grid item xs={8} sx={{ color: "white", textAlign: "center" }}>
        <Typography variant="h3" fontWeight={600} sx={{ mb: 2 }}>
          CUSTOM PC BUILD PAKISTAN
        </Typography>
        <Typography variant="h6">
          The BLAZE Series offers 5 configurations optimized for ultimate
          performance and the best cost per frame. Build your dream gaming pc
          from our Custom PC Builder
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ pl: 5, pr: 5 }}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default CustomSelection;
