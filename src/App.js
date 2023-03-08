import React, { useState } from "react";
import "./Styles/general.css";
import Nav from "./Components/Nav";
import CSheetOverview from "./Components/CheatSheetOverview";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav setToken={setToken} />
        <Routes>
          <Route path="/" element={<CSheetOverview />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
