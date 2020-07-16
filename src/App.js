import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message, onConfirm, onReject) => {
  if(!onConfirm || typeof callBack !== 'function'){
    return;
  }
  if(onReject && typeof onReject !== 'function'){
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)){
      callBack();
    }
    else{
      reject();
    }
  };

  return confirmAction;
}

const App = () => {
  const deleteAll = () => console.log("delete all..");
  const absort = () => console.log("absort");
  const confirmDelete = useConfirm("Are you sure?", deleteAll, absort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete All</button>
    </div>
  );
};

export default App;
