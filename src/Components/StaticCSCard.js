import React, { useEffect, useState } from "react";

//CHEATSHEET CARDS FOR static VIEW

const StaticCSCARD = (props) => {
  const info = props.object;
  const [currentTagName, setCurrentTagName] = useState(null);
  const [currentMode, setCurrentMode] = useState("display-only"); //Used to change between display only and edit mode
  const [currentCard, setCurrentCard] = useState();

  useEffect(() => {
    //Fetches cheatsheet's tag
    async function fetchTagName() {
      const response = await fetch(`/tag/${info.tag}`, {
        method: "GET",
        mode: "cors",
      });
      const data = await response.json();
      setCurrentTagName(data.name);
    }
    fetchTagName();
  }, [info.tag]);

  useEffect(() => {
    //Gets triggered when tag info updates and adjusts the card accordingly
    currentMode === "display-only" ? setDisplayCard() : setCardForm();
  }, [currentTagName, currentMode]);

  const editCheatsheet = () => {
    //Used to switch between modes
    currentMode === "display-only"
      ? setCurrentMode("edit")
      : setCurrentMode("display-only");
  };

  const setDisplayCard = () => {
    //For display-only mode
    setCurrentCard(
      <div
        className="CS-card-static"
        onClick={() => {
          editCheatsheet();
        }}
      >
        <h1>{info.name}</h1>
        <h2>{info.description}</h2>
        <div>{currentTagName && <h3>{currentTagName}</h3>}</div>
      </div>
    );
  };

  const setCardForm = () => {
    setCurrentCard(
      <form action={`/cheatsheet/${props._id}/update`} method="POST">
        <input type="text" name="name" value={info.name}></input>
        <input type="text" name="description" value={info.description}></input>
        <input type="text" name="tag" value={info.tag}></input>
      </form>
    )
    ;
  };

  return <div>{currentCard}</div>;
};

export default StaticCSCARD;
