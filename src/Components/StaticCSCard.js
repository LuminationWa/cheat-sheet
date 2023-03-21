import React, { useEffect, useState } from "react";

//CHEATSHEET CARDS FOR static VIEW

const StaticCSCARD = (props) => {
  const info = props.object;
  const [currentTagName, setCurrentTagName] = useState(null);

  useEffect(() => {
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

  return (
    <div className="CS-card-static">
      <h1>{info.name}</h1>
      <h2>{info.description}</h2>
      <div>{currentTagName && <h3>{currentTagName}</h3>}</div>
    </div>
  );
};

export default StaticCSCARD;
