import React from "react";
import { Grid, Box } from "@mui/material";
import BookCard from "../Book/BookCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import bookList from "../../utils/bookList";

function MainBox() {
  const matches = useMediaQuery("(max-width:600px)");
  let booksToShow = [];
  // const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (bookList?.length) {
    booksToShow = bookList.map((book, idx) => {
      return (
        <Grid key={idx} sm={4} md={3} lg={3} item>
          <BookCard data={book} />
        </Grid>
      );
    });
  }
  return (
    <Grid
      item
      xs
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {booksToShow}
      </Grid>
    </Grid>
  );
}

export default MainBox;
