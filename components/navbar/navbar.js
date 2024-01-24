import React from "react";
import {
  AppBarContainer,
  NavItems,
  NavLinks,
  StyledButton,
} from "./navbar.styles";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const links = ["Home", "About", "Services", "Contact Us"];
  return (
    <AppBarContainer>
      <NavItems>
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" height={80} width={125} />
        </Link>
        <NavLinks>
          {links.map((link) => (
            <Link href="/" key={link}>
              <StyledButton color="inherit">
                <Typography variant="body1" fontWeight={600}>
                  {link}
                </Typography>
              </StyledButton>
            </Link>
          ))}
        </NavLinks>
      </NavItems>
    </AppBarContainer>
  );
};

export default Navbar;
