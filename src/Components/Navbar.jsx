import React from "react";
import Auth from "./Auth";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Song Type Writer
        </Typography>
        <Auth />
      </Toolbar>
    </AppBar>
  );
};