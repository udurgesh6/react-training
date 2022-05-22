import React from "react";
import SubSubSubChild from "./SubSubSubChild";

const SubSubChild = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>This is subsubchild</p>
      <SubSubSubChild />
    </div>
  );
};

export default SubSubChild;
