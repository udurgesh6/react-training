import React, { useState, createContext } from "react";
import Button from "./Button";

const Component1 = () => {
  const [isActivate, setIsActivate] = useState(true);
  const onActivate = (expect) => {
    alert(`Activate button clicked ${expect}`);
  };
  const onDeactivate = (expect) => {
    alert(`Deactivate button clicked ${expect}`);
  };
  const userDetailContext = createContext();
  const [value, setValue] = useState(1);
  const incrementValue = () => {
    setValue((value) => value + 1);
  };

  const [str, setStr] = useState("Hello");

  const [ar, setArr] = useState(["a1", "b1", "c1"]);
  const onAddElement = () => {
    setArr((ar) => [...ar, str]);
  };

  return (
    <userDetailContext.Provider value={ar}>
      <div>
        <Button
          borderColor={isActivate ? "red" : "green"}
          // color={isActivate ? "red" : "green"}
          backgroundColor={isActivate ? "green" : "red"}
          value={isActivate ? "Activate" : "Deactivate"}
          onButtonClick={isActivate ? onActivate : onDeactivate}
        />
        <button onClick={() => setIsActivate(!isActivate)}>Change State</button>
        <p>Value = {value}</p>
        <p>Str = {str}</p>
        <input value={str} onChange={(e) => setStr(e.target.value)} />
        {ar.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
        <button onClick={onAddElement}>Add</button>
      </div>
    </userDetailContext.Provider>
  );
};

export default Component1;
