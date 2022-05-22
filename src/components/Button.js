import React, { useState, useContext } from "react";
import Component2 from "./Component2";
const Button = (props) => {
  const [show, setShow] = useState("Hello");
  const changeShow = () => {
    if (show === "Hello") {
      setShow("Bye");
    } else {
      setShow("Hello");
    }
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          border: `1px solid ${props.borderColor}`,
        }}
        onClick={() => props.onButtonClick(show)}
      >
        {props.value}
      </button>
      <button onClick={changeShow}>Change show</button>
      <p>{show}</p>
      <Component2 value={props.value} />
    </div>
  );
};

Button.defaultProps = { color: "yellow" };
export default Button;
