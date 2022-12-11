import React from "react";
import { Grid, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./SideBar.css";

function SideBar() {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      borderRadius={matches ? "0rem 0rem 5rem 5rem" : "0rem 5rem 5rem 0rem"}
      height={matches ? "auto" : "100vh"}
      // sx= matches ? {{ borderRadius: "0rem 5rem 5rem 0rem" }} : {{borderRadius: "0rem 5rem 5rem 0rem",}}
      sx={{
        backgroundColor: "white",
        border: "solid teal 1px",
        paddingBottom: "2rem",
        overflow: "auto",
        top: 0,
        left: 0,
        className: "side-bar",
      }}
      style={{
        position: "sticky",
      }}
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
