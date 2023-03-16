import React, { useEffect, useState } from "react";
import DynamicCSCard from "./DynamicCSCard";
import StaticCSCARD from "./StaticCSCard";
import CheatsheetModal from "./CheatsheetModal";

const CheatSheetOverview = () => {
  const [CSCards, setCSCards] = useState([]); //Stores the cheatsheets
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState("Cheatsheets"); //Stores what's being displayed
  const [currentView, setCurrentView] = useState("Static"); //Stores current view
  const [currentUser, setCurrentUser] = useState(""); //Stores current user
  const [currentUserCheatsheets, setCurrentUserCheatsheets] = useState([]);
  const changeView = () => {
    currentView === "Static"
      ? setCurrentView("Dynamic")
      : setCurrentView("Static");
  };

  useEffect(() => {
    async function fetchUser() {
      const tempStoredUser = await JSON.parse(localStorage.getItem("userInfo"));
      if (tempStoredUser) {
        setCurrentUser(tempStoredUser);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    //Gets triggered after used is fetched
    async function fetchCheatsheets() {
      if (!currentUser) return; // Wait until currentUser is defined
      const response = await fetch(`/cheatsheets?user=${currentUser._id}`, {
        method: "GET",
        mode: "cors",
      });
      const cheatsheets = await response.json();
      setCurrentUserCheatsheets(cheatsheets);
    }
    fetchCheatsheets();
  }, [currentUser]);

  useEffect(() => {
    //Remakes the cards based off currentView
    setCSCards([]);
    if (currentUserCheatsheets.length > 0 && currentView === "Static") {
      for (const object of currentUserCheatsheets) {
        setCSCards((prevArray) => [
          ...prevArray,
          <StaticCSCARD object={object} />,
        ]);
      }
    } else if (currentUserCheatsheets.length > 0 && currentView === "Dynamic") {
      for (const object of currentUserCheatsheets) {
        setCSCards((prevArray) => [
          ...prevArray,
          <DynamicCSCard object={object} />,
        ]);
      }
    }
  }, [currentUserCheatsheets, currentView]);

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
      <CheatsheetModal currentUser={currentUser} />
    </div>
  );
};

export default CheatSheetOverview;
