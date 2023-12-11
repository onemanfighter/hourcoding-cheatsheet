import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <div className="">
      <div className="">
        <NavComponent />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
