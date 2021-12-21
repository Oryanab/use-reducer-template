import React, { useContext } from "react";
import MainState from "../context/mainState";
import List from "./Components/List";
import From from "./Components/From";

export default function MainContainer() {
  return (
    <div className="main-div">
      <MainState>
        <From />
        <hr />
        <List />
      </MainState>
    </div>
  );
}
