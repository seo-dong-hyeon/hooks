import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    }
    return () => { // componentWillUnMount
      if(element.current){
        element.current.removeEventListener("click",onClick);
      }
    }
  },[]); // no dependency -> componentDitMount때만 단 한번만 실행 -> 영원히 지속
        //  dependency -> update될때마다 event 추가
  
  if(typeof onClick !== 'function'){
    return;
  }
  return element;
}

const App = () => {
  //const inputRef = useRef(); // getElementById
  //setTimeout(() => console.log(inputRef), 5000);
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
