import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../components/SideBar/SideBar";
import MainBox from "../components/MainBox/MainBox";

function Homepage() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "yellow",
          height: "100vh",
        }}
      >
        <SideBar />
        <MainBox />
      </Grid>
    </>
  );
}

export default Homepage;
