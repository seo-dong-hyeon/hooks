import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = ""; // 어떤 형태로든 return value 필요
  }
  const enablePrevent = () => window.addEventListener("beforeunload",listener);
  const disablePrevent = () => window.removeEventListener("beforeunload",listener);

  return {enablePrevent, disablePrevent};
}

const App = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};

export default App;
