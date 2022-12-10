import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [file, setFile] = useState("");
  const handleFileInput = (evnt) => {
    setFile(evnt.target.files[0]);
    setPreviewAvatar(URL.createObjectURL(evnt.target.files[0]));
    console.log("haha");
  };
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          fontSize: "1.5rem",
          fontWeight: 500,
          textAlign: "center",
          marginBottom: "1rem",
          color: "black",
        }}
      >
        Image To Text
      </Typography>
      {/* {!isLoading && !text & <input></input>} */}
      <TextField
        // onChange={handleInputChange}
        required
        hiddenLabel
        // fullWidth
        value=""
        variant="filled"
        size="small"
        type="text"
        name="username"
      />
      <Grid
        md={4}
        item
        alignItems={"center"}
        justifyContent={"center"}
        marginX={{ xs: "auto" }}
      >
        <Box display="flex" flexDirection={"column"} alignItems={"center"}>
          <Avatar
            src={previewAvatar}
            sx={{
              width: 128,
              height: 128,
              border: "solid 1px var(--color3)",
              marginBottom: 2,
            }}
          />
          <Button
            sx={{ fontWeight: "bold", textTransform: "none" }}
            component="label"
            defaultValue={previewAvatar}
          >
            Upload
            <input
              hidden
              accept=".png, .jpeg, .jpg*"
              type="file"
              onChange={handleFileInput}
            />
          </Button>
        </Box>
      </Grid>
    </div>
  );
}

export default SearchBar;
