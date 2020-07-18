import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []) // componenetDidMount
  return {ref: element, style: {opacity: 0}}; // return value를 prop처럼
}

const App = () => {
  const fadeInH1 = useFadeIn(3,2);
  const fadeInP = useFadeIn(5,5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lalalalal</p>
    </div>
  );
};

export default App;
