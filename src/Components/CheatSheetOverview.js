import Objects from "./placeholderObjects.js";
import React, { useEffect, useState } from "react";
import CSCard from "./CSCard";

const CheatSheetOverview = () => {
  const [CSCards, setCards] = useState([]);
  useEffect(() => {
    setCards([]);
    if (Objects.length > 0)
      for (const object of Objects) {
        setCards((prevArray) => [
          ...prevArray,
          <CSCard object={object} />,
        ]);
      }
  }, []);
  return <div class="main-content">{CSCards}</div>;
};

export default CheatSheetOverview;
