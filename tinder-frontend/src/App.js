import React from "react";
import "./index.css";
import Header from "./components/Header";
import TinderCard from "./components/TinderCards";
import SwipeButton from "./components/SwipeButtons";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButton />
    </div>
  );
};

export default App;
