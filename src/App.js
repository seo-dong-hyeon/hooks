import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({x: 0, y: 0});
  const handleScroll = () => {
    setState({x: window.scrollX, y: window.scrollY});
  }
  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  return state;
};

const App = () => {
  const { y } = useScroll();
  console.log(y);

  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hello</h1>
    </div>
  );
};

export default App;
