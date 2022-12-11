import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SideBar from "./components/SideBar/SideBar";
import MainBox from "./components/MainBox/MainBox";
import Homepage from "./pages/homepage";
function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
