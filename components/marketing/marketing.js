import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Marketing = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        background:
          "linear-gradient(180deg, rgba(196,17,31,1) 0%, rgba(140,50,138,1) 80%)",
        pt: 12,
        pb: 10,
      }}
    >
      <Grid item xs={8}>
        <Typography
          PC
          variant="h3"
          fontWeight={600}
          sx={{
            color: "white",
            textAlign: "center",
            mb: 10,
          }}
        >
          BEST VALUE CUSTOM GAMING PC
        </Typography>
      </Grid>
      <Grid item xs={10} sx={{ color: "white" }}>
        <Box
          sx={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/games.png"
            height={300}
            width={550}
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 15px 5px white",
            }}
          />
          <Box width="40%">
            <Typography variant="h4" fontWeight={600} mb={2}>
              Highest FPS Per Rupees
            </Typography>
            <Typography variant="body1">
              Get the highest FPS per rupee by building a gaming PC from Zestro.
              We focus on quality and customer care. Our goal is to set gaming
              standards in Pakistan. Utilize our Custom PC Builder for Highly
              optimized PC.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10} sx={{ color: "white", mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width="40%">
            <Typography variant="h4" fontWeight={600} mb={2}>
              Professional Builders With World Class Customer Support
            </Typography>
            <Typography variant="body1" mb={3}>
              Builds by professional PC builders. The builders are experts in
              the field with more than 5 years of experience.
            </Typography>
            <Typography variant="body1" mb={3}>
              Build your custom PC in Pakistan from Zestro
            </Typography>
            <Typography variant="body1">
              Evert Gaming PC from Zestro includes professional cable management
              and world-class customer support. We belive in quality and build
              PCs with love and care so that you have the best gaming experience
              ever.
            </Typography>
          </Box>
          <Image
            src="/games.png"
            height={300}
            width={550}
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 15px 5px white",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Marketing;
