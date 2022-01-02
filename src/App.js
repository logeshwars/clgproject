import React from "react";
import "./App.css";
import Top from "./components/Top";
import Body from "./components/Body";
import Middle from "./components/Middle";
import Hero from "./components/Hero";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Challenges from "./components/Challenges";

function App() {
  return (
    <div className="app">
     
      <Router>
      <Top />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Middle />
                <Body />
              </>
            }
          />
          <Route path="challenges" element={<Challenges/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
