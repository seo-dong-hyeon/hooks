import React, { useState } from "react";
import "./styles.css";

const contents = [
  {
    tab: "section1",
    content: "I'm section1"
  },
  {
    tab: "section2",
    content: "I'm section2"
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){ // 배열이 아니면 kill
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem : setCurrentIndex
  }

}

const App = () => {
  const {currentItem, changeItem} = useTabs(0,contents);
  return (
    <div className="App">
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}> 
          {section.tab}
        </button>
      ))}
      {currentItem.content}
    </div>
  );
};

export default App;
