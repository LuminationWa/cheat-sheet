import React, { useRef, useEffect } from "react";
//CHEATSHEET CARDS FOR DYNAMIC VIEW

const DynamicCSCard = (props) => {
  const myRef = useRef(null); //CS-card main div

  const onDrag = ({ movementX, movementY }) => {
    //Top and left to be stored in the db object
    const myElement = myRef.current;
    const getStyle = window.getComputedStyle(myElement);
    const leftVal = parseInt(getStyle.left);
    const topVal = parseInt(getStyle.top);
    myElement.style.left = `${leftVal + movementX}px`;
    myElement.style.top = `${topVal + movementY}px`;
  };

  useEffect(() => {
    const myElement = myRef.current;

    myElement.addEventListener("mousedown", (e) => {
      myElement.classList.add("active");
      myElement.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", (e) => {
      myElement.classList.remove("active");
      myElement.removeEventListener("mousemove", onDrag);
    });

    return () => {
      myElement.removeEventListener("mousedown", onDrag);
      document.removeEventListener("mouseup", onDrag);
      myElement.removeEventListener("mousemove", onDrag);
    };
  }, []);

  const info = props.object;
  return (
    <div className="CS-card-dynamic" ref={myRef}>
      <h1>{info.name}</h1>
      <h2>{info.description}</h2>
      <h3>{info.tag}</h3>
    </div>
  );
};

export default DynamicCSCard;

