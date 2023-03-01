import React from "react";
import "./Styles/general.css";
import Nav from "./Components/Nav";
import CSheetOverview from "./Components/CheatSheetOverview";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CSheetOverview />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
