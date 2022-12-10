import React from "react";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

function SideBar() {
  return (
    <Grid item xs="auto" sx={{ backgroundColor: "white", minWidth: "30%" }}>
      <div>Hiiii </div>
      <SearchBar />
    </Grid>
  );
}

export default SideBar;
