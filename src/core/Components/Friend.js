import React, { useContext } from "react";
import mainContext from "../../context/main-context";

export default function Friend({ friend, id }) {
  const { friends, dispatch } = useContext(mainContext);

  return (
    <div
      id={id}
      style={{ color: friend.blacklist ? "red" : "green" }}
      className="product-card"
    >
      <h5>{friend.name}</h5>
      <h5>{friend.age}</h5>
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE",
            payload: { name: friend.name, friend: friend },
          });
        }}
      >
        {friend.blacklist ? "Undo blacklist" : "blacklist"}
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DELETE_FRIEND",
            payload: { name: friend.name },
          });
        }}
      >
        Remove
      </button>
    </div>
  );
}
