import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
