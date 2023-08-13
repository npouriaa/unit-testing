import React from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter initialCount={0}/>
    </div>
  );
};

export default App;
