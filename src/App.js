import React, { useState } from "react";
import "./Styles/general.css";
import Nav from "./Components/Nav";
import CSheetOverview from "./Components/CheatSheetOverview";

function App() {
  const currentlyDisplaying = useState("Cheatsheets");
  return (
    <div className="App">
      <Nav />
      <CSheetOverview />
      <button className="add-btn">
        +
      </button>
      <button className="display-btn">
        {currentlyDisplaying}
      </button>
    </div>
  );
}

export default App;
