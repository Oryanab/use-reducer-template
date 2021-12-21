import React, { useReducer } from "react";
import mainContext from "./main-context";
import { mainReducer } from "../reducers/mainReducer";
import { listOfFriends } from "../data/listOfFriends";
const MainState = (props) => {
  const [friends, dispatch] = useReducer(mainReducer, [...listOfFriends]);
  return (
    <mainContext.Provider
      value={{
        friends,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
