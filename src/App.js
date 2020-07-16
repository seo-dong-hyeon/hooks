import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const specialChar = value => !value.includes("@");
  const name = useInput("Mr.",specialChar);
  return (
    <div className="App">
      <h1>Hello fuck</h1>
      <input placeholder="name" value={name.value} onChange={name.onChange} />
    </div>
  );
};

export default App;
