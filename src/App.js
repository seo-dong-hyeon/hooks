import React, { useState } from "react";
import "./styles.css";
//import { render } from "react-dom";

const App = () => {
  const [item, setItem] = useState(0);
  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello fuck {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;

/*class UglyApp extends React.Component {
  state = {
    item: 0
  };

  increment = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };

  decrement = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello fuck you {item}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
export default UglyApp;*/
