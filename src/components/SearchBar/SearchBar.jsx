import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Tesseract from "tesseract.js";
import { createWorker } from "tesseract.js";

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
    });
  };
  return (
    <div>
      <Grid
        md={4}
        item
        alignItems={"center"}
        justifyContent={"center"}
        marginX={{ xs: "auto" }}
      >
        {!isLoading && (
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
        )}
        {!isLoading && !textConverted && (
          <Box display="flex" flexDirection={"column"} alignItems={"center"}>
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
            <Avatar
              src={previewImgUrl}
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
              defaultValue={previewImgUrl}
              // onClick={handleConvert}
            >
              Select Image
              <input
                hidden
                accept=".png, .jpeg, .jpg*"
                type="file"
                onChange={handleFileInput}
              />
            </Button>
            <Button
              sx={{ fontWeight: "bold", textTransform: "none" }}
              component="label"
              defaultValue={previewImgUrl}
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
        {!isLoading && textConverted && (
          <Box>
            <TextareaAutosize
              maxRows={6}
              minRows={6}
              aria-label="minimum height"
              value={textConverted}
              style={{ width: 200 }}
            />
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default SearchBar;
