import React, { useContext, useState } from "react";
import SubSubChild from "./SubSubChild";
import someContext from "./User";
import ageContext from "./Age";

const SubChild = () => {
  const { name, changeName } = useContext(someContext);
  const [age, setAge] = useState(24);
  const changeAge = () => {
    setAge((age) => age + 1);
  };
  return (
    <ageContext.Provider value={{ age, changeAge }}>
      <div style={{ border: "1px solid blue" }}>
        <p>I am subchild</p>
        <p>Name = {name}</p>
        <button onClick={changeName}>Change Name</button>
      </div>
    </ageContext.Provider>
  );
};

export default SubChild;
