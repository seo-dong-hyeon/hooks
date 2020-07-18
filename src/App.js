import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNotification = (title, option) => {
  if(!("Notification") in window){
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title,option);
        }
        else{
          return;
        }
      });
    }
    else{
      new Notification(title,option);
    }
  }

  return fireNotif;
}

const App = () => {
  const triggerNotif = useNotification("Hi Hello!", {body: "lalala"});
  return (
    <button onClick={triggerNotif}>Hello</button>
  );
};

export default App;
