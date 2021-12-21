import React, { useContext } from "react";
import MainState from "../context/mainState";

import Child from "./Components/Child";

export default function MainContainer() {
  return (
    <div>
      <MainState>
        <Child />
      </MainState>
    </div>
  );
}
