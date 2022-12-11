import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import useMediaQuery from "@mui/material/useMediaQuery";

function SideBar() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      sx={{ backgroundColor: "white", paddingBottom: "1rem" }}
    >
      <Typography
        variant="h5"
        className="category-label"
        marginBottom={1}
        sx={{ fontSize: "1.8rem", fontWeight: "bold" }}
      >
        Books App
      </Typography>
      <SearchBar />
    </Grid>
  );
}

export default SideBar;
