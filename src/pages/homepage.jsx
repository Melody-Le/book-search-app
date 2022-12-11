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
        paddingTop={1}
        sx={{
          backgroundColor: "rgba(0, 157, 142, 0.3)",
        }}
      >
        <SideBar />
        <MainBox />
      </Grid>
    </>
  );
}

export default Homepage;
