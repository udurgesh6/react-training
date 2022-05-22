import React, { useContext } from "react";
import ageContext from "./Age";
const SubSubSubChild = () => {
  const { age, changeAge } = useContext(ageContext);
  return (
    <div style={{ border: "1px solid red" }}>
      <p>This is SubSubSubChild</p>
      <p>The age is {age}</p>
      <button onClick={changeAge}> Change Age</button>
    </div>
  );
};

export default SubSubSubChild;
