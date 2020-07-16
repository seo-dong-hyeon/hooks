import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // componentDitMount, componentDitUpdate -> 재실행, update 후에 실행
  // 첫번째 인자 -> 실행함수, 두번째 인자 -> dependency(조건) -> 빈 array -> 실행x
  useEffect(sayHello,[number]) 

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
