import React from "react";
import { Grid } from "@mui/material";
import Book from "../Book/Book";

function MainBox() {
  return (
    <Grid item xs>
      <div>MainBox</div>
      <Book />
    </Grid>
  );
}

export default MainBox;
