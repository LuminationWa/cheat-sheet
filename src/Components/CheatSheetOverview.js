import Objects from "./placeholderObjects.js";
import React, { useEffect, useState } from "react";
import DynamicCSCard from "./DynamicCSCard";
import StaticCSCARD from "./StaticCSCard";
import CheatsheetModal from "./CheatsheetModal";

const CheatSheetOverview = () => {
  const [CSCards, setCards] = useState([]); //Stores the cheatsheets
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState("Cheatsheets"); //Stores what's being displayed
  const [currentView, setCurrentView] = useState("Static"); //Stores current view
  const [currentUser, setCurrentUser] = useState("");//Stores current user
  const changeView = () => {
    currentView === "Static"
      ? setCurrentView("Dynamic")
      : setCurrentView("Static");
  };

  useEffect(() => {
    //Gets current user
    const tempStoredUser = JSON.parse(localStorage.getItem("userInfo"));
    if (tempStoredUser) {
      setCurrentUser(tempStoredUser);
    }
  },[]);

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
      <CheatsheetModal currentUser={currentUser}/>
    </div>
  );
};

export default CheatSheetOverview;
