import Objects from "./placeholderObjects.js";
import React, { useEffect, useState } from "react";
import DynamicCSCard from "./DynamicCSCard";
import StaticCSCARD from "./StaticCSCard";
import CheatsheetModal from "./CheatsheetModal";

const CheatSheetOverview = () => {
  const [CSCards, setCards] = useState([]); //Stores the cheatsheets
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState("Cheatsheets"); //Stores what's being displayed
  const [currentView, setCurrentView] = useState("Static"); //Stores current view
  const [currentUser, setCurrentUser] = useState("63ffbfe5f31f5a81324e2a0f");//Stores current user ID PLACEHOLDER ID
  const changeView = () => {
    currentView === "Static"
      ? setCurrentView("Dynamic")
      : setCurrentView("Static");
  };

  useEffect(() => {
    //Remakes the cards based off currentView
    setCards([]);
    if (Objects.length > 0 && currentView === "Static") {
      for (const object of Objects) {
        setCards((prevArray) => [
          ...prevArray,
          <StaticCSCARD object={object} />,
        ]);
      }
    } else if (Objects.length > 0 && currentView === "Dynamic") {
      for (const object of Objects) {
        setCards((prevArray) => [
          ...prevArray,
          <DynamicCSCard object={object} />,
        ]);
      }
    }
  }, [currentView]);
  return (
    <div class="main-content">
      {CSCards}
      <button className="display-btn">{currentlyDisplaying}</button>
      <button
        className="view-btn"
        onClick={() => {
          changeView();
        }}
      >
        {currentView}
      </button>
      <CheatsheetModal />
    </div>
  );
};

export default CheatSheetOverview;
