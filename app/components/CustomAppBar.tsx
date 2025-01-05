import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

export const CustomAppBar = () => {
  {
    /*TODO:app bar 右邊進階搜尋icon，點擊後到進階搜尋頁面 */
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            LOGO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
