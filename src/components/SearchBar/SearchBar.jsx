import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Tesseract from "tesseract.js";

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [textConverted, setTextConverted] = useState("");
  const [previewImgUrl, setPreviewImgUrl] = useState(null);
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileInput = (evnt) => {
    setFile(evnt.target.files[0]);
    setPreviewImgUrl(URL.createObjectURL(evnt.target.files[0]));
  };
  const handleConvert = (evnt) => {
    setIsLoading(true);
    Tesseract.recognize(previewImgUrl, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    }).then(({ data: { text } }) => {
      setTextConverted(text);
      setIsLoading(false);
      setPreviewImgUrl(null);
    });
  };
  const handleSearch = (evnt) => {
    evnt.preventDefault();
    if (textConverted !== "") {
      console.log(textConverted);
      setTextConverted("");
    }
  };
  const handleInputChange = (evnt) => {
    setTextConverted(evnt.target.value);
  };
  return (
    <div>
      <Grid
        item
        alignItems={"center"}
        justifyContent={"center"}
        marginX={{ xs: "auto" }}
      >
        {!isLoading && (
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <TextareaAutosize
              maxRows={6}
              minRows={1}
              aria-label="minimum height"
              value={textConverted}
              onChange={handleInputChange}
              style={{
                width: "80%",
                padding: "0.5rem 1rem",
                marginX: "1rem",
                marginY: "1rem",
                borderRadius: "1rem",
              }}
              sx={{
                width: "80%",
                padding: "1rem",
                marginX: "1rem",
                marginY: "1rem",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "teal",
                width: "80%",
                color: "white",
                borderRadius: "1rem",
                marginY: "1rem",
                padding: "8px",
                ":hover": {
                  border: "cyan",
                  backgroundColor: "blue",
                },
              }}
              component="label"
              defaultValue={previewImgUrl}
            >
              {previewImgUrl ? "Change Image" : "Choose Image"}
              <input
                hidden
                accept=".png, .jpeg, .jpg*"
                type="file"
                onChange={handleFileInput}
              />
            </Button>
            {!previewImgUrl && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "teal",
                  width: "80%",
                  color: "white",
                  borderRadius: "1rem",
                  padding: "8px",
                  ":hover": {
                    border: "cyan",
                    backgroundColor: "blue",
                  },
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            )}
          </Box>
        )}

        {!isLoading && previewImgUrl && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={previewImgUrl}
              variant="rounded"
              sx={{
                width: 128,
                height: 128,
                border: "solid 1px var(--color3)",
                marginBottom: 2,
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "teal",
                width: "80%",
                color: "white",
                borderRadius: "1rem",
                padding: "8px",
                ":hover": {
                  border: "cyan",
                  backgroundColor: "blue",
                },
              }}
              onClick={handleConvert}
            >
              Convert
            </Button>
          </Box>
        )}
        {isLoading && (
          <Box>
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
              is Loading {progress}
            </Typography>
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default SearchBar;
