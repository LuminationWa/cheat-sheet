import React from "react";
import "./Styles/general.css";
import Nav from "./Components/Nav";
import CSheetOverview from "./Components/CheatSheetOverview";

function App() {
  return (
    <div className="App">
      <Nav />
      <CSheetOverview />
    </div>
  );
}

export default App;
