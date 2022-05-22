import React from "react";
import SubChild from "./SubChild";

const Child = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>I am child</p>

      <SubChild />
    </div>
  );
};

export default Child;
