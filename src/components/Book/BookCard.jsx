import { React, useState } from "react";
import { Avatar, Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Paper from "@mui/material/Paper";

function BookCard(props) {
  return (
    <Paper elevation={5} sx={{ borderRadius: 4 }}>
      <Box padding={1}>
        <AspectRatio ratio="1" objectFit="cover" variant="square">
          <Avatar
            alt="book name"
            src="https://i.pinimg.com/564x/fc/e0/f6/fce0f6027d2fcbbd232fddcd71873f03.jpg"
            variant="rounded"
            sx={{
              width: "100%",
              borderRadius: 4,
            }}
          />
        </AspectRatio>

        <Box mt={1}>
          <Typography variant="subtitle1" className="category-label">
            Fiction Books
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginY={1}
          alignItems={"flex-start"}
        >
          <Typography variant="body" className="book-name">
            "Book name"
          </Typography>

          <Typography variant="subtitle1" className="price">
            Author:
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default BookCard;
